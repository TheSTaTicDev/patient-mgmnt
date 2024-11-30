import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:6969",
        methods: ["GET", "POST"]
    }
});

// Store active users and chat messages
const activeUsers = new Map(); // userId -> userInfo
const chatMessages = new Map(); // chatId -> messages[]

// Add these constants at the top
const DOCTOR_TYPE = 'DOCTOR';
const PATIENT_TYPE = 'PATIENT';

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('New client connected');

    // User registration
    socket.on('register', (userData) => {
        console.log('Registering user:', userData);
        activeUsers.set(userData.id, {
            ...userData,
            socketId: socket.id,
            online: true
        });
        socket.join(userData.id);
        broadcastUserLists();
    });

    // Get doctors list
    socket.on('get-doctors', () => {
        const doctors = Array.from(activeUsers.values())
            .filter(user => 
                user.type === DOCTOR_TYPE && 
                user.specialty && 
                user.specialty.trim() !== ''
            )
            .map(({ id, name, specialty, online, type }) => ({
                id, name, specialty, online, type
            }));
        
        console.log('Sending doctors with specialties:', doctors);
        socket.emit('doctors-list', doctors);
    });

    // Get patients list
    socket.on('get-patients', () => {
        const patients = Array.from(activeUsers.values())
            .filter(user => user.type === PATIENT_TYPE && user.id.includes('PATIENT'))
            .map(({ id, name, online, type }) => ({
                id, name, online, type
            }));
        console.log('Sending strictly filtered patients:', patients);
        socket.emit('patients-list', patients);
    });

    // Join specific chat room
    socket.on('join-chat', (chatId) => {
        console.log('User joining chat:', chatId);
        socket.join(chatId);
    });

    // Get chat history
    socket.on('get-chat-history', (chatId) => {
        console.log('Fetching chat history for:', chatId);
        const messages = chatMessages.get(chatId) || [];
        socket.emit('chat-history', messages);
    });

    // Handle new message
    socket.on('send-message', (messageData) => {
        console.log('New message:', messageData);
        const { chatId } = messageData;
        
        // Store message
        if (!chatMessages.has(chatId)) {
            chatMessages.set(chatId, []);
        }
        chatMessages.get(chatId).push(messageData);
        
        // Send only to users in this chat room
        io.to(chatId).emit('new-message', messageData);
    });

    // Handle typing indicator
    socket.on('typing', (data) => {
        socket.to(data.chatId).emit('user-typing', data);
    });

    socket.on('stop-typing', (data) => {
        socket.to(data.chatId).emit('user-stop-typing', data);
    });

    // Handle user logout
    socket.on('logout', (userId) => {
        if (activeUsers.has(userId)) {
            activeUsers.delete(userId);
            broadcastUserLists();
        }
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('Client disconnected');
        // Find and remove disconnected user
        for (const [userId, userData] of activeUsers.entries()) {
            if (userData.socketId === socket.id) {
                activeUsers.delete(userId);
                broadcastUserLists();
                break;
            }
        }
    });
});

// Helper function to broadcast updated user lists
function broadcastUserLists() {
    const doctors = Array.from(activeUsers.values())
        .filter(user => user.type === DOCTOR_TYPE && user.id.includes('DOCTOR'))
        .map(({ id, name, specialty, online, type }) => ({
            id, name, specialty, online, type
        }));

    const patients = Array.from(activeUsers.values())
        .filter(user => user.type === PATIENT_TYPE && user.id.includes('PATIENT'))
        .map(({ id, name, online, type }) => ({
            id, name, online, type
        }));

    console.log('Broadcasting updated lists - Doctors:', doctors);
    console.log('Broadcasting updated lists - Patients:', patients);

    io.emit('doctors-list', doctors);
    io.emit('patients-list', patients);
}

// Helper function to create chat ID (same as client)
function createChatId(user1Id, user2Id) {
    return [user1Id, user2Id].sort().join('_chat_');
}

// Start server
server.listen(6969, () => {
    console.log(`Server running on port http://localhost:6969/`);
});


  
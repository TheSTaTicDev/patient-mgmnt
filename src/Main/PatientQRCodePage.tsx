// src/PatientQRCodePage.tsx
import React from 'react';
import { Box, Paper, Typography, Button, Divider } from '@mui/material';
import ReactQR from 'react-qr-code';

const patientInfo = {
  name: "Arya P",
  age: 45,
  dob: "1978-05-14",
  address: "123 Main St, Springfield, USA",
  medications: [
    { name: "Paracetamol", dosage: "500mg - Twice a day" },
    { name: "Amoxicillin", dosage: "250mg - Once a day" },
  ],
  allergies: ["Penicillin", "Shellfish"],
  emergencyContact: {
    name: "Jane Doe",
    relationship: "Wife",
    phone: "555-1234",
  },
};

// Convert patient info directly to JSON string
const patientInfoString = JSON.stringify(patientInfo);

const PatientQRCodePage = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: "background.default", minHeight: "100vh" }}>
      <Paper
        elevation={0}
        sx={{
          padding: 4,
          marginTop: 2,
          borderRadius: 2,
          border: '1px solid rgba(148, 163, 184, 0.15)',
          background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(30, 41, 59, 0.7))',
        }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            textAlign: 'center', 
            color: '#60A5FA', // Bright blue
            mb: 2,
            fontWeight: 600,
            textShadow: '0 0 20px rgba(96, 165, 250, 0.3)',
          }}
        >
          Patient Information QR Code
        </Typography>
        
        <Divider sx={{ 
          mb: 3, 
          borderColor: 'rgba(148, 163, 184, 0.2)',
          boxShadow: '0 1px 2px rgba(96, 165, 250, 0.1)'
        }} />
        
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 2,
              color: '#A5B4FC', // Bright indigo
              fontSize: '1.1rem',
              fontWeight: 500
            }}
          >
            This QR code contains the following patient information:
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, color: '#93C5FD', fontWeight: 500 }}> {/* Bright blue */}
            • Personal Details (Name, Age, DOB)
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, color: '#93C5FD', fontWeight: 500 }}>
            • Current Medications
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, color: '#93C5FD', fontWeight: 500 }}>
            • Allergies
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, color: '#93C5FD', fontWeight: 500 }}>
            • Emergency Contact Information
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          backgroundColor: 'rgba(30, 41, 59, 0.6)',
          padding: 4,
          borderRadius: 2,
          border: '1px solid rgba(96, 165, 250, 0.2)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}>
          <ReactQR 
            value={patientInfoString} 
            size={256} 
            level="H"
            style={{ 
              background: 'white', 
              padding: '16px', 
              borderRadius: '8px',
              boxShadow: '0 0 20px rgba(96, 165, 250, 0.2)'
            }}
          />
          <Typography 
            variant="body1" 
            sx={{ 
              mt: 3, 
              mb: 2,
              color: '#60A5FA', // Bright blue
              fontWeight: 500,
              fontSize: '1.1rem',
              textShadow: '0 0 10px rgba(96, 165, 250, 0.3)'
            }}
          >
            Scan to view patient information
          </Typography>
          <Button
            variant="contained"
            sx={{ 
              mt: 1,
              backgroundColor: '#7C3AED', // Rich purple
              '&:hover': {
                backgroundColor: '#6D28D9', // Darker purple
              },
              boxShadow: '0 0 15px rgba(124, 58, 237, 0.3)',
              fontWeight: 500
            }}
          >
            Copy Patient Data
          </Button>
        </Box>

        <Typography 
          variant="caption" 
          sx={{ 
            display: 'block', 
            textAlign: 'center', 
            mt: 3,
            color: '#A5B4FC', // Bright indigo
            fontSize: '0.9rem',
            fontWeight: 500
          }}
        >
          For medical professionals and emergency responders only
        </Typography>
      </Paper>
    </Box>
  );
};

export default PatientQRCodePage;

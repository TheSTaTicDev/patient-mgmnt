import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';
import ReactQR from 'react-qr-code'; // Correct import for react-qr-code

const patientInfo = {
  name: "Arya P",
  age: 45,
  dob: "1978-05-14",
  address: "123 Main St, Springfield, USA",
  medications: [
    { name: "Paracetamol", dosage: "500mg - Twice a day" },
    { name: "Amoxicillin", dosage: "250mg - Once a day" },
  ],
  allergies: ["Penicillin", "Shellfish"], // Add allergies data if needed
  emergencyContact: {
    name: "Aryan ",
    relationship: "Wife",
    phone: "555-1234",
  },
};

// Convert the object to a JSON string for embedding in QR Code
const patientInfoString = JSON.stringify(patientInfo);

const PatientQRCodePage = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: "#f9fafc", minHeight: "100vh" }}>
      {/* Header */}
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          marginBottom: 4,
          borderRadius: 4,
          maxWidth: 900,
          margin: "0 auto",
          background: "linear-gradient(45deg, #1976d2, #43a047)",
          color: "#fff",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Patient Information QR Code
        </Typography>
        <Typography variant="body1">
          Scan the QR code below to access patient information.
        </Typography>
      </Paper>

      {/* QR Code Section */}
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          marginTop: 4,
          borderRadius: 4,
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* QR Code generated using react-qr-code */}
        <ReactQR value={patientInfoString} size={256} level="H" />
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          Scan this QR code to view the patient details.
        </Typography>

        {/* Button to copy or share QR Code */}
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 4 }}
          onClick={() => navigator.clipboard.writeText(patientInfoString)}
        >
          Copy QR Code Data
        </Button>
      </Paper>
    </Box>
  );
};

export default PatientQRCodePage;

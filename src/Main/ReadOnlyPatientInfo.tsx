import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Box, 
  Paper, 
  Typography, 
  Divider, 
  List, 
  ListItem, 
  ListItemText,
  Card,
  CardContent
} from '@mui/material';

const ReadOnlyPatientInfo = () => {
  const [searchParams] = useSearchParams();

  // Parse the URL parameters
  const patientInfo = {
    name: searchParams.get('name') || '',
    age: searchParams.get('age') || '',
    dob: searchParams.get('dob') || '',
    address: searchParams.get('address') || '',
    medications: JSON.parse(searchParams.get('medications') || '[]'),
    allergies: JSON.parse(searchParams.get('allergies') || '[]'),
    emergencyContact: JSON.parse(searchParams.get('emergencyContact') || '{}')
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f9fafc", minHeight: "100vh" }}>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: 800,
          margin: "0 auto",
          borderRadius: 2
        }}
      >
        <Typography variant="h4" sx={{ color: '#1976d2', mb: 3, textAlign: 'center' }}>
          Patient Information
        </Typography>

        <Divider sx={{ mb: 4 }} />

        {/* Personal Information */}
        <Card sx={{ mb: 3, backgroundColor: '#f8f9fa' }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2, color: '#1976d2' }}>
              Personal Details
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Name:</strong> {patientInfo.name}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Age:</strong> {patientInfo.age}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Date of Birth:</strong> {patientInfo.dob}
            </Typography>
            <Typography variant="body1">
              <strong>Address:</strong> {patientInfo.address}
            </Typography>
          </CardContent>
        </Card>

        {/* Medications */}
        <Card sx={{ mb: 3, backgroundColor: '#f8f9fa' }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2, color: '#1976d2' }}>
              Current Medications
            </Typography>
            <List>
              {patientInfo.medications.map((med: any, index: number) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={med.name}
                    secondary={med.dosage}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        {/* Allergies */}
        <Card sx={{ mb: 3, backgroundColor: '#f8f9fa' }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2, color: '#1976d2' }}>
              Allergies
            </Typography>
            <List>
              {patientInfo.allergies.map((allergy: string, index: number) => (
                <ListItem key={index}>
                  <ListItemText primary={allergy} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card sx={{ backgroundColor: '#f8f9fa' }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2, color: '#1976d2' }}>
              Emergency Contact
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Name:</strong> {patientInfo.emergencyContact.name}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Relationship:</strong> {patientInfo.emergencyContact.relationship}
            </Typography>
            <Typography variant="body1">
              <strong>Phone:</strong> {patientInfo.emergencyContact.phone}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};

export default ReadOnlyPatientInfo; 
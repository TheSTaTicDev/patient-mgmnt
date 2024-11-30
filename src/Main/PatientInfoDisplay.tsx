import { Card, CardContent, Typography, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';

export default function PatientInfoDisplay() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const patientInfo = {
    name: searchParams.get('name') || '',
    age: searchParams.get('age') || '',
    gender: searchParams.get('gender') || '',
    bloodType: searchParams.get('bloodType') || '',
    allergies: searchParams.get('allergies') || '',
    // Add other fields as needed
  };

  return (
    <Card sx={{ maxWidth: 600, margin: '20px auto', p: 2 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Patient Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Name: {patientInfo.name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Age: {patientInfo.age}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Gender: {patientInfo.gender}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Blood Type: {patientInfo.bloodType}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Allergies: {patientInfo.allergies}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
} 
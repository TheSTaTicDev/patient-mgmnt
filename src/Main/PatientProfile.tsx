import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Avatar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export const PatientProfile = () => {
  const [tabValue, setTabValue] = React.useState<number>(0);
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState({
    name: "Arya P",
    age: 45,
    dob: "1978-05-14",
    address: "123 Main St, Springfield, USA",
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleEditClick = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ backgroundColor: "background.default", borderRadius: 2 }}>
      {/* Profile Header */}
      <Paper
        elevation={0}
        sx={{
          p: 4,
          mb: 4,
          borderRadius: 2,
          background: 'linear-gradient(45deg, rgba(124, 58, 237, 0.1), rgba(96, 165, 250, 0.1))',
          border: '1px solid rgba(148, 163, 184, 0.15)',
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar
              sx={{
                width: 100,
                height: 100,
                bgcolor: 'primary.main',
                border: '4px solid rgba(124, 58, 237, 0.3)',
              }}
            >
              {formData.name.charAt(0)}
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography variant="h4" sx={{ color: 'text.primary', mb: 1 }}>
              {formData.name}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 0.5 }}>
              Age: {formData.age}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              DOB: {formData.dob}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton
              onClick={handleEditClick}
              sx={{ color: 'primary.light' }}
            >
              <EditIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>

      {/* Tabs */}
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        centered
        sx={{
          mb: 3,
          '& .MuiTabs-indicator': {
            backgroundColor: 'primary.main',
          },
        }}
      >
        <Tab label="General Info" />
        <Tab label="Medications" />
        <Tab label="Treatments" />
      </Tabs>

      {/* Tab Panels */}
      {tabValue === 0 && (
        <Card
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 2,
            border: '1px solid rgba(148, 163, 184, 0.15)',
          }}
        >
          <Typography variant="h6" sx={{ color: 'primary.light', mb: 3 }}>
            General Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography sx={{ color: 'text.primary', mb: 1 }}>
                <strong>Name:</strong> {formData.name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ color: 'text.primary', mb: 1 }}>
                <strong>Age:</strong> {formData.age}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ color: 'text.primary', mb: 1 }}>
                <strong>DOB:</strong> {formData.dob}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ color: 'text.primary' }}>
                <strong>Address:</strong> {formData.address}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      )}

      {tabValue === 1 && (
        <Card
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 2,
            border: '1px solid rgba(148, 163, 184, 0.15)',
          }}
        >
          <Typography variant="h6" sx={{ color: 'primary.light', mb: 3 }}>
            Current Medications
          </Typography>
          <List>
            <ListItem sx={{ borderRadius: 1, mb: 1 }}>
              <ListItemText
                primary={
                  <Typography sx={{ color: 'text.primary' }}>Paracetamol</Typography>
                }
                secondary={
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    500mg - Twice a day
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ borderRadius: 1 }}>
              <ListItemText
                primary={
                  <Typography sx={{ color: 'text.primary' }}>Amoxicillin</Typography>
                }
                secondary={
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    250mg - Once a day
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Card>
      )}

      {tabValue === 2 && (
        <Card
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 2,
            border: '1px solid rgba(148, 163, 184, 0.15)',
          }}
        >
          <Typography variant="h6" sx={{ color: 'primary.light', mb: 3 }}>
            Ongoing Treatments
          </Typography>
          <Card
            sx={{
              backgroundColor: 'background.paper',
              borderRadius: 2,
              border: '1px solid rgba(148, 163, 184, 0.15)',
            }}
          >
            <CardContent>
              <Typography sx={{ color: 'text.primary', mb: 1 }}>
                <strong>Treatment Name:</strong> Physical Therapy
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Frequency: 3 sessions per week
              </Typography>
            </CardContent>
          </Card>
        </Card>
      )}

      {/* Edit Dialog */}
      <Dialog 
        open={openDialog} 
        onClose={handleDialogClose}
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            borderRadius: 2,
          }
        }}
      >
        <DialogTitle sx={{ color: 'text.primary' }}>
          Edit Patient Information
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(148, 163, 184, 0.15)',
                },
              },
            }}
          />
          <TextField
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(148, 163, 184, 0.15)',
                },
              },
            }}
          />
          <TextField
            label="Date of Birth"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(148, 163, 184, 0.15)',
                },
              },
            }}
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(148, 163, 184, 0.15)',
                },
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} sx={{ color: 'text.secondary' }}>
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};










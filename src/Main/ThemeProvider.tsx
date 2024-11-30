// src/ThemeProvider.tsx
import React from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
} from "@mui/material";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7C3AED', // Rich purple
      light: '#9D5CFF',
    },
    secondary: {
      main: '#60A5FA', // Bright blue
    },
    background: {
      default: '#0F172A', // Dark blue-gray
      paper: '#1E293B', // Lighter blue-gray
    },
    text: {
      primary: '#F1F5F9', // Very light gray
      secondary: '#94A3B8', // Medium gray
    },
    divider: 'rgba(148, 163, 184, 0.15)', // Subtle divider
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      color: '#F1F5F9',
    },
    h6: {
      fontWeight: 500,
      color: '#F1F5F9',
    },
    body1: {
      color: '#E2E8F0',
    },
    body2: {
      color: '#CBD5E1',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E293B',
          borderBottom: '1px solid rgba(148, 163, 184, 0.15)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#1E293B',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#2D3748',
          borderRadius: '12px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '1rem',
          '&.Mui-selected': {
            color: '#7C3AED',
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: 'rgba(124, 58, 237, 0.08)',
          },
        },
      },
    },
  },
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};





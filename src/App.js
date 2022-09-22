import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material';
import COLORS from './constants/Colors';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resume from './pages/resume';



const theme = createTheme({

  palette: {
    primary: {
      main: COLORS.PRIMARY
    },
    secondary: {
      main: '#ffffff'
    }
  },

  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: 20,
          textTransform: 'capitalize'
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          color: 'rgba(255, 255, 255, 0.7)',
        },
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontWeight: 700
        }
      }
    }
  },

  typography: {
    fontFamily: [
      'Noto Sans', 'sans-serif'
    ].join(','),
  },
});





function App() {
  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Resume/>} exact/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  )
}

export default App;

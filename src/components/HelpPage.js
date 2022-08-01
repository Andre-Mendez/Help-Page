import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Help() {
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <p><img src='careLogo.png' height={40}/></p>
          <Typography component="h1" variant="h5" id="help">
            Help Page
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              multiline
              rows={15}
              id="helpText"
              name="helpText"
              autoFocus
            />
    
            <Button
              id = 'submit'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
            >
              Submit
            </Button>
            
            <div><img src = 'feedback.png' height={50} alt = 'Feedback Picture'/> <p id = 'FeedBack'>Send Feedback!</p></div>
            <p><Button
                  type="normal"
                  fullWidth
                  variant="contained"
                  sx={{mb: 2 }}
            >Back to my account</Button></p>
            <Button
                  type="normal"
                  fullWidth
                  variant="contained"
                  sx={{mb: 2 }}
                  
            >
            Back to home</Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
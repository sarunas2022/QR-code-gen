import React from 'react';
import './App.css';
import { Container, TextField, Typography } from '@mui/material';

export default function App() {
    return (
        <Container>
            <Container sx={{ pt: 4 }}>
                <Typography variant='h5' align='center' sx={{ py: 3 }}>
                    Enter text or URL to create QR code
                </Typography>
                <TextField fullWidth id='fullWidth'></TextField>
            </Container>
        </Container>
    );
}

import React, { useState } from 'react';
import './App.css';
import { Container, TextField, Typography, Button, Box } from '@mui/material';

export default function App() {
    const [input, setInput] = useState('');

    return (
        <Container>
            <Container sx={{ pt: 4 }}>
                <Typography variant='h5' align='center' sx={{ py: 3 }}>
                    Enter text or URL to create QR code
                </Typography>
                <Box sx={{ display: 'flex' }}>
                    <TextField fullWidth id='fullWidth'></TextField>
                    <Button variant='contained'>generate!</Button>
                </Box>
            </Container>
        </Container>
    );
}

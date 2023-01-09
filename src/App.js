import React, { useState } from 'react';
import './App.css';
import { QRCodeCanvas } from 'qrcode.react';
import { Container, TextField, Typography, Button, Box } from '@mui/material';

export default function App() {
    const [input, setInput] = useState('');
    const [qr, setQr] = useState('');

    const inputSubmit = (event) => {
        event.preventDefault();
        setQr(input);
        setInput('');
    };
    const qrcode = (
        <Container align='center' sx={{ pt: 10 }}>
            <QRCodeCanvas
                id='qrCode'
                value={qr}
                size={300}
                level={'H'}
            ></QRCodeCanvas>
            <Box sx={{ pt: 4 }}>
                <Button variant='contained'>Download QR code</Button>
            </Box>
        </Container>
    );
    console.log(input);
    return (
        <Container>
            <Container sx={{ pt: 4 }}>
                <Typography variant='h5' align='center' sx={{ py: 3 }}>
                    Enter text or URL to create QR code
                </Typography>
                <Box sx={{ display: 'flex' }}>
                    <TextField
                        onKeyPress={(e) => {
                            e.key === 'Enter' && inputSubmit(e);
                        }}
                        onChange={(event) => setInput(event.target.value)}
                        fullWidth
                        id='fullWidth'
                        value={input}
                    ></TextField>
                    <Button onClick={inputSubmit} variant='contained'>
                        generate!
                    </Button>
                </Box>
            </Container>
            {!qr ? <div /> : qrcode}
        </Container>
    );
}

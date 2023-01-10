import React, { useState } from 'react';
import './App.css';
import { QRCodeCanvas } from 'qrcode.react';
import { Container, TextField, Typography, Button, Box } from '@mui/material';

export default function App() {
    // states for input and qr code on click
    const [input, setInput] = useState('');
    const [qr, setQr] = useState('');
    // function to setting qr code value and deleting input field value after submit
    const inputSubmit = (event) => {
        event.preventDefault();
        setQr(input);
        setInput('');
    };

    // function for downloading a qr code
    const downloadQR = () => {
        const canvas = document.getElementById('qrCode');
        const pngUrl = canvas.toDataURL('image/png');
        let downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = 'qr code.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
    };

    // function returns generated grcode after taking data from input field
    const qrcode = (
        <Container align='center' sx={{ pt: 10 }}>
            <QRCodeCanvas
                className='output'
                id='qrCode'
                value={qr}
                size={260}
                level={'H'}
            ></QRCodeCanvas>
            <Box sx={{ pt: 4 }}>
                <Button onClick={downloadQR} variant='contained'>
                    Download QR code
                </Button>
            </Box>
        </Container>
    );
    return (
        <Container>
            <Container sx={{ pt: 4 }}>
                <Typography variant='h5' align='center' sx={{ py: 3 }}>
                    Enter text or URL to create QR code
                </Typography>
                <Box sx={{ display: 'flex' }}>
                    <TextField
                        // in order to be able to submit inout on enter event for key click set
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
            {/* if qr value is not set returns empty div, else returns qr code */}
            {!qr ? <div /> : qrcode}
        </Container>
    );
}

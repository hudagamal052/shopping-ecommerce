import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../firebase";
import {
    TextField,
    Button,
    Typography,
    Paper,
    Box,
    Divider,
    Link,
    Snackbar,
    Alert,
    CircularProgress,
} from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon } from '@mui/icons-material';

const Login = ({ onToggleForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleLoginWithFirebase = async (provider) => {
        try {
            setLoading(true);
            const result = await signInWithPopup(auth, provider);
            setLoading(false);
            console.log("Logged in as:", result.user.displayName);
            setSnackbarMessage('Login successful!');
            setSnackbarSeverity('success');
            setOpenSnackbar(true);
            setTimeout(() => navigate('/'), 2000);
        } catch (err) {
            setLoading(false);
            console.error("Login error:", err.message);
            if (err.code === "auth/account-exists-with-different-credential") {
                const email = err.email;
                const credential = err.credential;
                if (credential && credential.providerId) {
                    const existingProvider = credential.providerId;
                    setSnackbarMessage('Account already exists with a different provider. Please login with the existing method or link accounts.');
                    setSnackbarSeverity('warning');
                    setOpenSnackbar(true);
                    const existingUser = auth.currentUser;
                    await linkAccounts(existingUser, provider); 
                } else {
                    setSnackbarMessage('Unable to resolve account conflict. Please use a different method.');
                    setSnackbarSeverity('error');
                    setOpenSnackbar(true);
                }
            } else {
                setSnackbarMessage('An error occurred with the third-party login.');
                setSnackbarSeverity('error');
                setOpenSnackbar(true);
            }
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            setLoading(false);
            if (response.ok) {
                setSnackbarMessage('Login successful!');
                setSnackbarSeverity('success');
                setOpenSnackbar(true);
                setTimeout(() => navigate('/'), 2000);
            } else {
                setSnackbarMessage(data.error || 'Invalid email or password');
                setSnackbarSeverity('error');
                setOpenSnackbar(true);
            }
        } catch (error) {
            setLoading(false);
            setSnackbarMessage('An error occurred. Please try again.');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        }
    };

    return (
        <Box
            sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #A8D0DB, #6A71A7, #48A6A7)',
                backgroundSize: '400% 400%',
                animation: 'gradientBG 15s ease infinite',
                '@keyframes gradientBG': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    padding: 4,
                    borderRadius: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(10px)',
                    width: '100%',
                    maxWidth: 700,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ flex: 1, paddingRight: 4 }}>
                    <Typography variant="h4" sx={{ color: '#6A71A7', marginBottom: 2, textAlign: 'center' }}>
                        Login
                    </Typography>

                    <Typography variant="body2" sx={{ color: '#6A71A7', textAlign: 'center', marginBottom: 2 }}>
                        <span>Don't have an account? </span>
                        <Link
                            onClick={() => navigate('/signup')}
                            sx={{ color: '#48A6A7', fontWeight: 'bold', textDecoration: 'none', "&:hover": { textDecoration: 'underline' } }}
                            component="button"
                        >
                            Sign up
                        </Link>
                    </Typography>

                    <Box component="form" noValidate autoComplete="off" onSubmit={handleLogin}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{
                                backgroundColor: '#ffffff',
                                borderRadius: 2,
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#6A71A7',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#48A6A7',
                                    },
                                },
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{
                                backgroundColor: '#ffffff',
                                borderRadius: 2,
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#6A71A7',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#48A6A7',
                                    },
                                },
                            }}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            type="submit"
                            sx={{
                                marginTop: 2,
                                backgroundColor: '#48A6A7',
                                '&:hover': { backgroundColor: '#6A71A7' },
                                padding: "10px",
                                fontSize: "16px",
                            }}
                            disabled={loading} 
                        >
                            {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Login'}
                        </Button>
                    </Box>
                </Box>

                <Divider orientation="vertical" flexItem sx={{ mx: 2, fontWeight: 'bold', color: '#6A71A7' }} >
                    OR
                </Divider>

                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <Button
                        sx={{
                            width: "100%",
                            color: '#DB4437',
                            borderColor: '#DB4437',
                            '&:hover': { backgroundColor: '#DB4437', color: '#fff' },
                            textTransform: 'none',
                            padding: "12px",
                            fontSize: "16px",
                            justifyContent: 'center',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        variant="outlined"
                        startIcon={<GoogleIcon />}
                        onClick={() => handleLoginWithFirebase(googleProvider)}
                        disabled={loading} 
                    >
                        {loading ? <CircularProgress size={24} sx={{ color: '#DB4437' }} /> : 'Continue with Google'}
                    </Button>

                    <Button
                        sx={{
                            width: "100%",
                            color: '#4267B2',
                            borderColor: '#4267B2',
                            '&:hover': { backgroundColor: '#4267B2', color: '#fff' },
                            textTransform: 'none',
                            padding: "12px",
                            fontSize: "16px",
                            justifyContent: 'center',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        variant="outlined"
                        startIcon={<FacebookIcon />}
                        onClick={() => handleLoginWithFirebase(facebookProvider)}
                        disabled={loading} 
                    >
                        {loading ? <CircularProgress size={24} sx={{ color: '#4267B2' }} /> : 'Continue with Facebook'}
                    </Button>
                </Box>
            </Paper>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    severity={snackbarSeverity}
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Login;

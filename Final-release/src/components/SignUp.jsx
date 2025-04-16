import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, facebookProvider } from '../firebase'; 
import {
    TextField,
    Button,
    Typography,
    Paper,
    Box,
    Divider,
    Link,
    Snackbar,
    Alert
} from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon } from '@mui/icons-material';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const validateForm = () => {
        let formErrors = {};
        if (!email) formErrors.email = 'Email is required.';
        if (!password) formErrors.password = 'Password is required.';
        if (!confirmPassword) formErrors.confirmPassword = 'Please confirm your password.';
        if (password !== confirmPassword) formErrors.passwordMatch = "Passwords don't match!";
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            setLoading(true);
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            setLoading(false);
            if (response.ok) {
                setSnackbarMessage('Registration successful! You can now log in.');
                setSnackbarSeverity('success');
                setOpenSnackbar(true);
                setTimeout(() => navigate('/login'), 2000);
            } else {
                setSnackbarMessage(data.error || 'Registration failed!');
                setSnackbarSeverity('error');
                setOpenSnackbar(true);
            }
        } catch (error) {
            setLoading(false);
            setSnackbarMessage('Network error. Please try again.');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        }
    };

    const handleSignUpWithProvider = async (provider) => {
        try {
            setLoading(true);
            const result = await signInWithPopup(auth, provider);
            setLoading(false);
            console.log("Signed up with:", result.user.displayName);
            setSnackbarMessage('Sign up successful!');
            setSnackbarSeverity('success');
            setOpenSnackbar(true);
            setTimeout(() => navigate('/'), 2000);
        } catch (err) {
            setLoading(false);
            setSnackbarMessage(err.message || 'Sign up failed!');
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
                background: 'linear-gradient(135deg, #e0f4f5, #93BDC0FF, #10686BFF)',
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
                    <Typography variant="h4" sx={{ color: '#006A71', marginBottom: 2, textAlign: 'center' }}>
                        Sign Up
                    </Typography>

                    <Typography variant="body2" sx={{ color: '#00697162', textAlign: 'center', marginBottom: 2 }}>
                        <span>Already have an account? </span>
                        <Link
                            onClick={() => navigate('/login')}
                            sx={{ color: '#48A6A7', fontWeight: 'bold', textDecoration: 'none', "&:hover": { textDecoration: 'underline' } }}
                            component="button"
                        >
                            Login
                        </Link>
                    </Typography>

                    <Box component="form" noValidate autoComplete="off" onSubmit={handleSignUp}>
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
                            error={!!errors.email}
                            helperText={errors.email}
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
                            error={!!errors.password}
                            helperText={errors.password}
                        />
                        <TextField
                            fullWidth
                            label="Confirm Password"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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
                            error={!!errors.confirmPassword || !!errors.passwordMatch}
                            helperText={errors.confirmPassword || errors.passwordMatch}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            type="submit"
                            sx={{
                                marginTop: 2,
                                backgroundColor: '#48A6A7',
                                '&:hover': { backgroundColor: '#004f52' },
                                padding: "12px",
                                fontSize: "16px",
                                textTransform: 'none',
                            }}
                            disabled={loading}
                        >
                            {loading ? "Signing Up..." : "Sign Up"}
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
                        onClick={() => handleSignUpWithProvider(googleProvider)}
                        disabled={loading}
                    >
                        {loading ? "Signing Up..." : "Continue with Google"}
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
                        onClick={() => handleSignUpWithProvider(facebookProvider)}
                        disabled={loading}
                    >
                        {loading ? "Signing Up..." : "Continue with Facebook"}
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
                    onClose={handleCloseSnackbar}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default SignUp;
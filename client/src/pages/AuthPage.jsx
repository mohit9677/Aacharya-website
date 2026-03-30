import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { FaCube } from 'react-icons/fa';
import InteractiveZodiac, { SagittariusShootOverlay } from '../components/ui/InteractiveZodiac';
import './AuthPage.css';

const AuthPage = ({ initialMode = 'login' }) => {
    const [mode, setMode] = useState(initialMode);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    
    // Sagittarius animation state
    const [showSagittarius, setShowSagittarius] = useState(false);
    
    // Form States
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [clientError, setClientError] = useState('');

    const { login, signup, loading, error: serverError } = useAuth();
    const navigate = useNavigate();

    const { name, email, password, confirmPassword } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleTabSwitch = (newMode) => {
        if (newMode === 'register' && mode !== 'register') {
            setShowSagittarius(true);
            setTimeout(() => {
                setShowSagittarius(false);
                setMode(newMode);
            }, 800); // Wait for arrow animation before switching form
        } else {
            setMode(newMode);
        }
        setClientError('');
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setClientError('');

        if (mode === 'register') {
            if (password !== confirmPassword) {
                setClientError('Passwords do not match');
                return;
            }
            if (password.length < 6) {
                setClientError('Password must be at least 6 characters');
                return;
            }
            await signup({ name, email, password });
        } else {
            await login({ email, password });
        }
    };

    return (
        <div className="auth-page-wrapper">
            <div className="auth-card-container">
                {/* Left Side: Professional Zodiac Grid */}
                <div className="auth-visual-side">
                    <InteractiveZodiac isFocused={isPasswordFocused} />
                    
                    {/* Sagittarius Custom Overlay */}
                    <SagittariusShootOverlay show={showSagittarius} />
                </div>

                {/* Right Side: Clean White Form */}
                <div className="auth-form-side">
                    <div className="auth-form-wrapper">
                    
                        {/* Tab Switcher */}
                        <div className="auth-tabs">
                            <button 
                                className={`auth-tab ${mode === 'login' ? 'active' : ''}`}
                                onClick={() => handleTabSwitch('login')}
                                disabled={showSagittarius}
                            >
                                Log In
                            </button>
                            <button 
                                className={`auth-tab ${mode === 'register' ? 'active' : ''}`}
                                onClick={() => handleTabSwitch('register')}
                                disabled={showSagittarius}
                            >
                                Sign Up
                            </button>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={mode}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {(clientError || serverError) && (
                                    <div className="alert alert-danger" style={{marginBottom: '1rem', padding: '0.8rem', background: '#FEE2E2', color: '#991B1B', borderRadius: '8px', fontSize: '0.85rem'}}>
                                        {clientError || serverError}
                                    </div>
                                )}

                                <form onSubmit={onSubmit}>
                                    {mode === 'register' && (
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={name}
                                                onChange={onChange}
                                                required
                                            />
                                        </div>
                                    )}

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={onChange}
                                            onFocus={() => setIsPasswordFocused(true)}
                                            onBlur={() => setIsPasswordFocused(false)}
                                            required
                                        />
                                    </div>

                                    {mode === 'register' && (
                                        <div className="form-group">
                                            <label htmlFor="confirmPassword">Confirm Password</label>
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                value={confirmPassword}
                                                onChange={onChange}
                                                onFocus={() => setIsPasswordFocused(true)}
                                                onBlur={() => setIsPasswordFocused(false)}
                                                required
                                            />
                                        </div>
                                    )}

                                    {mode === 'login' && (
                                        <div className="form-options">
                                            <label>
                                                <input type="checkbox" /> Remember me
                                            </label>
                                            <a href="#forgot">Forgot password?</a>
                                        </div>
                                    )}

                                    <button 
                                        type="submit" 
                                        className="btn-primary"
                                        disabled={loading || showSagittarius}
                                    >
                                        {loading ? 'Processing...' : (mode === 'login' ? 'Log in' : 'Sign up')}
                                    </button>
                                    
                                    {mode === 'login' && (
                                        <button 
                                            type="button" 
                                            className="btn-google"
                                            onClick={() => alert("Google Login placeholder")}
                                        >
                                            <FcGoogle size={20} /> Log in with Google
                                        </button>
                                    )}
                                </form>
                            </motion.div>
                        </AnimatePresence>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;

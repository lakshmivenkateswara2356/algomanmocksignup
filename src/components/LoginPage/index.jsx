import React, { useState, useEffect } from 'react';
import image from '../../Assets/dummyimg.jpg';
import { FaSun, FaMoon } from 'react-icons/fa';
import './index.css';

function LoginPage() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [email, setEmail] = useState('');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        // Perform login action here
    };

    useEffect(() => {
        document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
    }, [theme]);

    return (
        <div className='dark-light'>
            <div className='total-Containerassigne'>
                <img src={image} alt="Background" className='imagedummy' />
                <div className="login-container">
                    <div className='top-right-corner'>
                        <a href="/signuppage" className='login-button'>Sign up</a>
                        <div className="theme-toggle-container" onClick={toggleTheme}>
                            {theme === 'light' ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
                        </div>
                    </div>
                    <div className="login-card">
                        <div className="logo-placeholder">
                            {/* You can replace this with your logo */}
                        </div>
                        <h2 className='loginheddin'>Welcome!</h2>
                        <p>Enter your Credentials to login</p>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>
                                    <input type="email" className='text-emaile' name="email" placeholder='example@gmail.com' value={email} onChange={handleEmailChange} required />
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="password" className='text-emaile' name="password" placeholder='password' value={email} onChange={handleEmailChange} required />
                                </label>
                            </div>
                            <p>or</p>
                            <button type="submit" className="signupwith-button">Continue</button>
                        </form>
                        <div className="secured-by">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;

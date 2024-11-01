import React, { useState } from 'react';
import styles from './SignInForm.module.css';

const SignInForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className={styles.signInContainer}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit} className={styles.signInForm}>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit" className={styles.signInButton}>Sign In</button>
            </form>
            <p className={styles.registerText}>
                Don't have an account? <a href="/register" className={styles.registerLink}>Register</a>
            </p>
        </div>
    );
};

export default SignInForm;

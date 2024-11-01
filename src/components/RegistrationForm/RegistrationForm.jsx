import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Тут можна додати логіку обробки форми або API-запит
        console.log("Form submitted:", formData);
    };

    return (
        <div className={styles.registrationContainer}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className={styles.registrationForm}>
                <label>
                    First Name
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Last Name
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Username
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </label>
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
                <label>
                    Confirm Password
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit" className={styles.registerButton}>Register</button>
            </form>
            <p className={styles.signInText}>
                Do you have an account? <a href="/signin" className={styles.signInLink}>Sign in</a>
            </p>
        </div>
    );
};

export default RegistrationForm;

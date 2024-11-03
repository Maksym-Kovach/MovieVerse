import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            navigate('/'); // Перенаправлення на головну сторінку після реєстрації
        } catch (err) {
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <div className={styles.registrationContainer}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className={styles.registrationForm}>
                <label> Email <input type="email" name="email" value={formData.email} onChange={handleChange} required /> </label>
                <label> Password <input type="password" name="password" value={formData.password} onChange={handleChange} required /> </label>
                <label> Confirm Password <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required /> </label>
                <button type="submit" className={styles.registerButton}>Register</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <p className={styles.signInText}>Do you have an account? <a href="/signin" className={styles.signInLink}>Sign in</a></p>
        </div>
    );
};

export default RegistrationForm;

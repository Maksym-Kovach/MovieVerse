import React from 'react';
import styles from './UserProfile.module.css';

const UserProfile = () => {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.userInfo}>
                <p><span>Username:</span> User</p>
                <p><span>Email:</span> user@gmail.com</p>
                <p><span>FirstName:</span> User</p>
                <p><span>LastName:</span> User</p>
            </div>
            <div className={styles.avatarSection}>
                <img
                    src="https://cs13.pikabu.ru/post_img/2023/10/28/2/1698456437194820220.jpg"
                    alt="User Avatar"
                    className={styles.avatarImage}
                />
                <button className={styles.changeAvatarButton}>Change avatar</button>
                <button className={styles.changeProfileButton}>Change profile</button>
            </div>
        </div>
    );
};

export default UserProfile;

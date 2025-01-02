import React from 'react'
import styles from '../styles/Avatar.module.css'

const Avatar = ({ src, height = 45, text }) => {
    const defaultImage = "https://res.cloudinary.com/du7daaai2/image/upload/default_profile_fhledc";

    return (
        <span>
            <img
                className={styles.Avatar}
                src={src}
                height={height}
                width={height}
                alt='avatar'
                onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = defaultImage; // Set to default image
                    console.log('Error occured, setting profile image to default image.')
                  }}
            />
            {text}
        </span>
    )
}

export default Avatar
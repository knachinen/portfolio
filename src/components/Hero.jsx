import React from 'react';
import data from '../data.json';

const Hero = () => {
    return (
        <section style={styles.hero}>
            <div className="container">
                <p style={styles.role}>{data.profile.role}</p>
                <h2 style={styles.bio}>{data.profile.bio}</h2>
                <div style={styles.location}>
                    <span style={styles.dot}></span>
                    {data.profile.location}
                </div>
            </div>
        </section>
    );
};

const styles = {
    hero: {
        padding: '4rem 0 8rem',
    },
    role: {
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'var(--secondary-text)',
        marginBottom: '1.5rem',
    },
    bio: {
        fontSize: '2.5rem',
        fontWeight: '400',
        lineHeight: '1.3',
        maxWidth: '90%',
        marginBottom: '2rem',
        whiteSpace: 'pre-line',
        wordBreak: 'break-word',
    },
    location: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.9rem',
        color: 'var(--secondary-text)',
    },
    dot: {
        width: '8px',
        height: '8px',
        backgroundColor: '#27ae60',
        borderRadius: '50%',
        display: 'inline-block',
    }
};

export default Hero;

import React from 'react';
import data from '../data.json';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div className="container" style={styles.container}>
                <p style={styles.copyright}>&copy; {new Date().getFullYear()} {data.profile.name}</p>
                <ul style={styles.socialList}>
                    {data.socials.map((social, index) => (
                        <li key={index}>
                            <a href={social.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
                                {social.platform}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        padding: '4rem 0',
        marginTop: '4rem',
        borderTop: '1px solid #eee',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
    },
    copyright: {
        fontSize: '0.9rem',
        color: 'var(--secondary-text)',
    },
    socialList: {
        display: 'flex',
        gap: '1.5rem',
    },
    link: {
        fontSize: '0.9rem',
        color: 'var(--text-color)',
        opacity: 0.8,
        transition: 'opacity 0.2s ease',
    }
};

export default Footer;

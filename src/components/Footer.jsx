import React from 'react';
import data from '../data.json';

const Footer = () => {
    const contact = data.contact || {}; // contact 데이터가 없어도 에러나지 않도록 처리

    return (
        <footer id="contact" style={styles.footer}>
            <div className="container" style={styles.container}>
                <p style={styles.copyright}>&copy; {new Date().getFullYear()} {data.profile.name}</p>
                <ul style={styles.socialList}>
                    {contact.email && (
                        <li>
                            <a href={`mailto:${contact.email}`} style={styles.link}>
                                Email
                            </a>
                        </li>
                    )}
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
        padding: '3rem 0',
        marginTop: '6rem',
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
        color: 'var(--secondary-text, #666)',
    },
    socialList: {
        display: 'flex',
        gap: '1.5rem',
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    link: {
        fontSize: '0.9rem',
        color: 'var(--text-color, #333)',
        opacity: 0.8,
        textDecoration: 'none',
        transition: 'opacity 0.2s ease, color 0.2s ease',
        ':hover': {
            opacity: 1,
            color: 'var(--accent-color, #000)',
        }
    }
};

export default Footer;

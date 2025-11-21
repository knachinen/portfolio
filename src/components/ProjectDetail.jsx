import React, { useState, useEffect } from 'react'; // Import useState and useEffect

const ProjectDetail = ({ project, onClose }) => {
    const [modalTop, setModalTop] = useState(0); // State to store dynamic top position

    if (!project) {
        return null;
    }

    useEffect(() => {
        // Calculate the top position based on current scroll and a small offset
        const offset = 50; // Pixels from the top of the current viewport
        setModalTop(window.scrollY + offset);
    }, [project]); // Recalculate if the project changes

    return (
        <div style={styles.overlay}>
            <div style={{ ...styles.modal, top: modalTop + 'px' }}> {/* Apply dynamic top */}
                <button onClick={onClose} style={styles.closeButton}>&times;</button>
                <h2 style={styles.title}>{project.title}</h2>
                <p style={styles.description}>{project.description}</p>
                {project.details && <p style={styles.details}>{project.details}</p>}
                <div style={styles.tags}>
                    {project.tags.map((tag, index) => (
                        <span key={index} style={styles.tag}>{tag}</span>
                    ))}
                </div>
                {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                        View Project &rarr;
                    </a>
                )}
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed', // Keep fixed to cover the screen
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex', // Keep flex for children alignment if needed, but remove alignItems: 'center'
        justifyContent: 'center', // Horizontal centering
        zIndex: 1000,
    },
    modal: {
        position: 'absolute', // Position relative to the overlay
        backgroundColor: 'var(--bg-color)',
        padding: '2rem',
        borderRadius: '8px',
        width: '90%',
        maxWidth: '700px',
        maxHeight: '80%',
        overflowY: 'auto',
        // 'top' will be set dynamically
        left: '50%', // Center horizontally
        transform: 'translateX(-50%)', // Center horizontally
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    },
    closeButton: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        background: 'none',
        border: 'none',
        fontSize: '1.5rem',
        cursor: 'pointer',
        color: 'var(--text-color)',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '1rem',
        color: 'var(--text-color)',
    },
    description: {
        fontSize: '1.1rem',
        color: 'var(--secondary-text)',
        marginBottom: '1rem',
        lineHeight: '1.6',
    },
    details: {
        fontSize: '1rem',
        color: 'var(--text-color)',
        marginBottom: '1.5rem',
        lineHeight: '1.7',
        whiteSpace: 'pre-wrap', // Preserve line breaks in details
    },
    tags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '1.5rem',
    },
    tag: {
        fontSize: '0.8rem',
        padding: '0.3rem 0.8rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '20px',
        color: '#666',
    },
    link: {
        display: 'inline-block',
        marginTop: '1rem',
        color: 'var(--accent-color)',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
};

export default ProjectDetail;

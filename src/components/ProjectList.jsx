import React from 'react';
import data from '../data.json';

const ProjectList = () => {
    return (
        <section id="work" style={styles.section}>
            <div className="container">
                <h3 style={styles.sectionTitle}>Selected Work</h3>
                <div style={styles.grid}>
                    {data.projects.map((project) => (
                        <a key={project.id} href={project.link} style={styles.card} className="project-card">
                            <div style={styles.header}>
                                <h4 style={styles.title}>{project.title}</h4>
                                <span style={styles.arrow}>&rarr;</span>
                            </div>
                            <p style={styles.description}>{project.description}</p>
                            <div style={styles.tags}>
                                {project.tags.map((tag, index) => (
                                    <span key={index} style={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '4rem 0',
    },
    sectionTitle: {
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'var(--secondary-text)',
        marginBottom: '3rem',
        borderBottom: '1px solid #eee',
        paddingBottom: '1rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
    },
    card: {
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: '500',
    },
    arrow: {
        fontSize: '1.5rem',
        transition: 'transform 0.2s ease',
    },
    description: {
        fontSize: '1rem',
        color: 'var(--secondary-text)',
        marginBottom: '1.5rem',
        lineHeight: '1.5',
    },
    tags: {
        display: 'flex',
        gap: '0.8rem',
        flexWrap: 'wrap',
    },
    tag: {
        fontSize: '0.8rem',
        padding: '0.3rem 0.8rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '20px',
        color: '#666',
    }
};

export default ProjectList;

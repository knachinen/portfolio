import React, { useMemo } from 'react';
import data from '../data.json';

const ProjectList = ({ onProjectSelect }) => {

    // useMemo를 사용하여 데이터가 변경되지 않는 한 정렬을 한 번만 실행하도록 최적화합니다.
    const sortedProjects = useMemo(() => {
        // 1. 원본 배열의 복사본을 만듭니다.
        return [...data.projects].sort((a, b) => {

            // 2. ID 값을 숫자로 직접 비교합니다.
            // 내림차순 정렬 (큰 숫자인 b.id가 a.id보다 앞에 오도록 b.id - a.id)
            return b.id - a.id;
        });
    }, [data.projects]);
    // data.projects가 data.json에서 import된 정적 데이터이므로 사실상 이 useMemo는 한 번만 실행됩니다.

    return (
        <section id="work" style={styles.section}>
            <div className="container">
                <h3 style={styles.sectionTitle}>Project</h3>
                <div style={styles.grid}>
                    {sortedProjects.map((project) => (
                        <div
                            key={project.id}
                            style={styles.card}
                            className="project-card"
                            onClick={() => onProjectSelect(project)}
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    onProjectSelect(project);
                                }
                            }}
                        >
                            <span style={styles.date}>{project.date}</span>
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
                        </div>
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
        fontSize: '1.0rem',
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
        padding: '1.5rem',
        borderRadius: '8px',
        border: '1px solid transparent',
        transition: 'border-color 0.2s ease, background-color 0.2s ease',
        cursor: 'pointer', // Add cursor pointer to indicate clickability
        ':hover': { // Hover 효과 추가
            borderColor: '#ddd',
            backgroundColor: '#f9f9f9',
        }
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0.5rem',
    },
    date: {
        fontSize: '0.9rem',
        fontWeight: '500',
        color: 'var(--accent-color, #888)', // 부드러운 회색 또는 포인트 색상 사용
        marginBottom: '1rem', // 제목과의 간격
        display: 'block', // 블록 요소로 만들어 제목과 독립적인 줄에 위치
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

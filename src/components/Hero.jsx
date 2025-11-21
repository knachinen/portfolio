import React from 'react';
import data from '../data.json';

const Hero = () => {
    const profile = data.profile;
    return (
        <section style={styles.hero}>
            <div className="container">
                {profile.profileImage && (
                    <div style={styles.profileImageContainer}>
                        <img
                            src={profile.profileImage}
                            alt={profile.name}
                            style={styles.profileImage}
                        />
                    </div>
                )}
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
    profileImageContainer: {
        width: '120px', // 이미지 컨테이너 크기
        height: '120px',
        borderRadius: '50%', // 원형으로 만들기
        overflow: 'hidden', // 넘치는 부분 자르기
        margin: '0 auto 2rem auto', // 가운데 정렬 및 하단 여백
        border: '3px solid var(--accent-color, #4a90e2)', // 테두리 추가 (선택 사항)
    },
    profileImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover', // 이미지가 컨테이너에 꽉 차도록 채움
    },
    role: {
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'var(--secondary-text)',
        marginBottom: '1.5rem',
    },
    bio: {
        fontSize: '1.5rem',
        fontWeight: '400',
        lineHeight: '1.5',
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

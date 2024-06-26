import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import JobDescription from '../../CommonComponent/JobDescription/JobDescription';
import Logo from '../../assets/Logo/leoraLogo.png';

const Tab1 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Adjust this threshold as needed
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const responsibilities = [
        'Build dynamic and responsive web applications using React JS, including React hooks, lifecycle methods, and state management.',
        'Understand and utilize modern JavaScript features and syntax effectively.',
        'Collaborate with UI/UX designers to enhance user experience.',
        'Implement and adhere to HTML5 and CSS3 standards, including responsive design principles.',
        'Utilize state management libraries such as Redux and React\'s Context API.',
        'Develop reusable and modular components to ensure maintainable and scalable code.',
        'Optimize performance using techniques like virtualization, lazy loading, code splitting, and memoization.',
        'Troubleshoot and debug issues proactively to ensure smooth application functioning.',
        'Stay updated with the latest technologies through continuous research and self-learning.',
        'Oversee testing protocols to maintain application quality and reliability.'
    ];

    return (
        <div ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <JobDescription
                    logo={Logo}
                    jobTitle="React JS Developer"
                    duration="Jun 2022 - Present · 2 yrs"
                    company="Leora Infotech Private Limited · Full-time"
                    location="Gummidipoondi, Chennai · On-site"
                    responsibilities={responsibilities}
                />
            </motion.div>
        </div>
    );
};

export default Tab1;

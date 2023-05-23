import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Beginner's Gym Program",
        info: "This program is designed for individuals who are new to the gym or have limited experience with strength training.",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Strength Training Program",
        info: "This program is designed for individuals who have some experience with strength training and are looking to increase their overall strength.",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Weight Loss Program",
        info: "This program is designed for individuals who are looking to lose weight and improve their overall fitness.The program includes a combination of cardiovascular and strength training exercises.",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Bodybuilding Program",
        info: "This program is designed for individuals who are looking to build muscle and improve their physique.The program includes a combination of compound lifts and isolation exercises.",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Commitment to Excellence",
        desc: "At our gym, we are committed to providing our members with excellent facilities, equipment, and services to help them achieve their fitness goals. "
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Inclusivity and Diversity",
        desc: "We believe that fitness should be accessible to everyone, regardless of age, gender, ethnicity, or fitness level."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Community and Support",
        desc: "At our gym, we believe that fitness is more than just working out - it's about building a community and supporting each other on our fitness journeys."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Personalization and Customization",
        desc: "We understand that every individual has unique fitness goals and needs. That's why we offer personalized training programs, nutritional guidance."
    }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "It is recommended to exercise at least 150 minutes per week, which can be broken down into smaller sessions."
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "The best time of day to work out is whenever you can consistently fit it into your schedule and feel most energized and motivated, whether it's morning, afternoon, or evening."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "Workouts should ideally be at least 30 minutes long, but can range from 10-60 minutes depending on your fitness level, goals, and available time."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Yes, warming up before workouts helps prepare your muscles, joints, and cardiovascular system for exercise, reducing risk of injury and improving performance."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Ideally, you should do both strength training and cardio for overall health and fitness benefits. The specific balance depends on your goals and preferences."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Lifting weights is an effective way to build strength and muscle, but other types of resistance training such as bodyweight exercises and resistance bands can also be effective."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "I joined this gym a few months ago, and I have already seen a significant improvement in my strength and fitness level. The trainers are knowledgeable and supportive, and the facilities are top-notch. Highly recommend!",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "I have been a member of this gym for years, and I can honestly say that it's the best gym I've ever been to. The community is welcoming and friendly, and the trainers are always available to answer any questions I have. I've achieved fitness goals I never thought were possible thanks to this gym.",
        job: "Software Engineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "As someone who was intimidated by the idea of going to the gym, I was hesitant to join. But the staff here made me feel welcome and comfortable right from the start. The personalized training program they created for me has helped me achieve my fitness goals, and I couldn't be happier with my progress.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "This gym has everything I need to stay motivated and achieve my fitness goals. The equipment is modern and well-maintained, and the trainers are knowledgeable and supportive. The group fitness classes are also a great way to mix up my routine and stay engaged.",
        job: "Doctor",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "I recently started attending the yoga classes at this gym, and it has been life-changing. The instructors are fantastic, and the environment is so calming and peaceful. I feel like I'm not only improving my physical health, but my mental health as well. Highly recommend giving it a try!",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'Fitness equipment', available: true},
            {feature: 'Personalized training', available: true},
            {feature: 'Group classes', available: true},
            {feature: 'Nutrition support', available: true},
            {feature: 'Unlimited gym access', available: true},
            {feature: 'Fitness assessments', available: false},
            {feature: 'Flexible pricing', available: false},
            {feature: 'Training discounts', available: false},
            {feature: 'Community events', available: false},
            {feature: 'Towel and locker service', available: false},
            {feature: 'Online member portal', available: false},
            {feature: 'Specialty programs', available: false},
            {feature: 'Priority access to fitness equipment', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for Regular who know what their doing',
        price: 49.99,
        features: [
            {feature: 'Fitness equipment', available: true},
            {feature: 'Personalized training', available: true},
            {feature: 'Group classes', available: true},
            {feature: 'Nutrition support', available: true},
            {feature: 'Unlimited gym access', available: true},
            {feature: 'Fitness assessments', available: true},
            {feature: 'Flexible pricing', available: true},
            {feature: 'Training discounts', available: true},
            {feature: 'Community events', available: true},
            {feature: 'Towel and locker service', available: false},
            {feature: 'Online member portal', available: false},
            {feature: 'Specialty programs', available: false},
            {feature: 'Priority access to fitness equipment', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for Advanced people who need more services',
        price: 89.99,
        features: [
            {feature: 'Fitness equipment', available: true},
            {feature: 'Personalized training', available: true},
            {feature: 'Group classes', available: true},
            {feature: 'Nutrition support', available: true},
            {feature: 'Unlimited gym access', available: true},
            {feature: 'Fitness assessments', available: true},
            {feature: 'Flexible pricing', available: true},
            {feature: 'Training discounts', available: true},
            {feature: 'Community events', available: true},
            {feature: 'Towel and locker service', available: true},
            {feature: 'Online member portal', available: true},
            {feature: 'Specialty programs', available: true},
            {feature: 'Priority access to fitness equipment', available: true}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]
export interface TeamMember {
    name: string;
    title: string;
    image: string;
    hoverImage: string;
    description: string;
}

export interface Statistic {
    value: string;
    suffix: string;
    label: string;
}

export interface CEOInfo {
    name: string;
    title: string;
    image: string;
}

export interface AboutUsData {
    hero: {
        badge: string;
        title: {
            part1: string;
            highlight: string;
            part2: string;
        };
        subtitle?: string;
    };
    aboutSection: {
        title: string;
        description: string[];
        mission: {
            title: string;
            description: string;
        };
        vision: {
            title: string;
            description: string;
        };
    };
    whyBuilt: {
        title: string;
        description: string[];
        ceo: CEOInfo;
    };
    whereWeAre: {
        title: string;
        subtitle: string;
        icon: string;
    };
    statistics: {
        subtitle: string;
        stats: Statistic[];
        comingSoon: {
            title: string;
            description: string;
        };
    };
    team: {
        title: {
            part1: string;
            highlight: string;
            part2: string;
        };
        subtitle: string;
        backgroundImage: string;
        members: TeamMember[];
    };
    waitlist: {
        title: string;
        subtitle: string;
        placeholder: string;
        buttonText: string;
    };
}

export const aboutUsData: AboutUsData = {
    hero: {
        badge: "About Us",
        title: {
            part1: "We Deliver",
            highlight: "Memorable Experiences",
            part2: "for Everyone"
        },
        subtitle: ""
    },
    aboutSection: {
        title: "About Trck",
        description: [
            "TRCK is a leisure technology platform designed to be your guide for finding and booking fun experiences. Our core purpose is to eliminate the common frustration of not knowing what to do or where to go during your leisure moments.",
            "We identified a simple yet relatable problem of people having free time but then being faced with the challenge of figuring out where to go or what exciting activities are happening around them. TRCK solves this issue by connecting those seeking enjoyment with independent organizers who offer unique experiences.",
            "TRCK reimagines the word \"track\" with a bold, location-inspired identity that captures our mission to help people find meaningful experiences wherever they are without depending on others."
        ],
        mission: {
            title: "Our Mission",
            description: "To turn moments into memorable experiences and make enjoyment easy for everyone."
        },
        vision: {
            title: "Our Vision",
            description: "To make discovering and booking memorable leisure experiences as easy as scrolling on your phone."
        }
    },
    whyBuilt: {
        title: "Why Trck was built",
        description: [
            "After relocating from Lagos to Abuja in 2022, it was a new beginning in a different city. I had no friends at the time, and it was unclear where the most enjoyable locations were. While I had a lot of free time, there was nothing fun to do with it. When I would finally hear about something interesting, it was either too late, too expensive, or just not worth the hype.",
            "That experience revealed a clear and common challenge. It showed that most people rely on friends, social circles, or group chats to find and experience leisure activities. But not everyone has that kind of access. Some people are introverted, while others are new to the city. Even locals miss out on what's happening around them.",
            "That was when the idea came. What if there were a simple way to explore what's happening near you based on your vibe, schedule, and interests? A platform where you could see it all, choose what suits you, and book it instantly without waiting on friends or group chats. That is how TRCK started."
        ],
        ceo: {
            name: "C.A OLISA",
            title: "CEO",
            image: "/ceo.jpg"
        }
    },
    whereWeAre: {
        title: "Where we are now?",
        subtitle: "",
        icon: "/Trck_icon.svg"
    },
    statistics: {
        subtitle: "TRCK's waitlist continues to grow as more people join every day",
        stats: [
            {
                value: "500",
                suffix: "+",
                label: "On the waitlist"
            },
            {
                value: "20",
                suffix: "+",
                label: "Joining daily"
            }
        ],
        comingSoon: {
            title: "Coming Soon",
            description: "Pilot Experiences & Partnerships"
        }
    },
    team: {
        title: {
            part1: "Meet the",
            highlight: "Trck",
            part2: "Team"
        },
        subtitle: "We are an agile team of creatives, tech experts, and strategists on a mission to redefine how people experience leisure and entertainment through technology.",
        backgroundImage: "/Outline.svg",
        members: [
            {
                name: "Cornelius Adefolarin Olisa",
                title: "Chief Executive Officer",
                image: "/ceo.webp",
                hoverImage: "/Hover.png",
                description: "Marketing and communications expert, creative strategist, and graduate of Sociology from the University of Abuja"
            },
            {
                name: "Ogbuji Emmanuel",
                title: "Chief Experience Officer",
                image: "/Ogbuji.webp",
                hoverImage: "/Hover.png",
                description: "Frontend developer, brand strategist, and product designer with a Computer Science degree from Landmark University"
            },
            {
                name: "Onawola Paul",
                title: "Chief Technology Officer",
                image: "/cto.webp",
                hoverImage: "/Hover.png",
                description: "iOS developer with a strong background in Computer Science from Landmark University."
            },
            {
                name: "Oluwatooni Amu",
                title: "Chief Operating Officer",
                image: "/coo.webp",
                hoverImage: "/Hover.png",
                description: "Business analyst with a BBA in Marketing from the University of New Brunswick"
            }
        ]
    },
    waitlist: {
        title: "Stay Informed Before We go Live",
        subtitle: "We are coming to your city soon",
        placeholder: "Enter Your Email Address",
        buttonText: "Get on Trck"
    }
};

export default aboutUsData;

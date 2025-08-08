export interface CarouselSlide {
    id: string;
    title: string;
    description: string;
    category: string;
    gradient: string;
}

export const carouselSlides: CarouselSlide[] = [
    {
        id: "1",
        title: "Local Events",
        description: "Discover exciting events in your area",
        category: "Events",
        gradient: "from-blue-500 to-purple-600"
    },
    {
        id: "2",
        title: "Meet People",
        description: "Connect with your neighbors",
        category: "Community",
        gradient: "from-green-500 to-blue-600"
    },
    {
        id: "3",
        title: "Cultural Experiences",
        description: "Explore local culture",
        category: "Culture",
        gradient: "from-purple-500 to-pink-600"
    },
    {
        id: "4",
        title: "Outdoor Fun",
        description: "Adventure awaits outside",
        category: "Adventure",
        gradient: "from-orange-500 to-red-600"
    },
    {
        id: "5",
        title: "Skill Building",
        description: "Learn something new",
        category: "Learn",
        gradient: "from-teal-500 to-green-600"
    }
];

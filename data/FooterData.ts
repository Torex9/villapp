export interface FooterLink {
    label: string;
    href: string;
    className?: string;
}

export interface SocialIcon {
    name: string;
    href: string;
    icon: string;
    alt: string;
}

export interface FooterSection {
    title: string;
    links: FooterLink[];
}

export interface AppStoreButton {
    alt: string;
    src: string;
    width: number;
    height: number;
}

export interface FooterData {
    cta: {
        title: string;
        appStoreHref: string;
        buttons: AppStoreButton[];
    };
    contact: {
        title: string;
        email: FooterLink;
        socialIcons: SocialIcon[];
    };
    sections: FooterSection[];
    copyright: {
        disclaimer: string;
        notice: string;
    };
}

export const footerData: FooterData = {
    cta: {
        title: "Your next fun experience\nis one click away",
        appStoreHref: "/#waitlist",
        buttons: [
            {
                alt: "Get it on Google Play",
                src: "/Google.webp",
                width: 200,
                height: 50,
            },
            {
                alt: "Get it on App Store",
                src: "/Apple.webp",
                width: 200,
                height: 50,
            },
        ],
    },
    contact: {
        title: "CONTACT",
        email: {
            label: "info@getontrck.com",
            href: "mailto:info@getontrck.com",
            className: "text-[#ed5a2e] font-bold",
        },
        socialIcons: [
            {
                name: "LinkedIn",
                href: "https://www.linkedin.com/company/trck-hq",
                icon: "/Linkedin.png",
                alt: "Linkedin",
            },
            {
                name: "Instagram",
                href: "https://instagram.com/getontrck",
                icon: "/Instagram.png",
                alt: "Instagram",
            },
            {
                name: "TikTok",
                href: "https://tiktok.com/@getontrck",
                icon: "/Tiktok.png",
                alt: "Tiktok",
            },
            {
                name: "X",
                href: "https://x.com/@getontrck",
                icon: "/X.png",
                alt: "X",
            },
        ],
    },
    sections: [
        {
            title: "COMPANY",
            links: [
                {
                    label: "About Us",
                    href: "/about-us",
                    className: "text-gray-400 hover:text-[#ed5a2e] transition-colors duration-300",
                },
                {
                    label: "How We Work",
                    href: "/#how-we-work",
                    className: "text-gray-400 hover:text-[#ed5a2e] transition-colors duration-300",
                },
                {
                    label: "Features",
                    href: "/#features",
                    className: "text-gray-400 hover:text-[#ed5a2e] transition-colors duration-300",
                },
            ],
        },
        {
            title: "LEGAL",
            links: [
                {
                    label: "Privacy policy",
                    href: "/legal/privacy-policy",
                    className: "text-gray-400 hover:text-[#ed5a2e] transition-colors duration-300",
                },
                {
                    label: "Terms of service",
                    href: "/legal/terms-of-service",
                    className: "text-gray-400 hover:text-[#ed5a2e] transition-colors duration-300",
                },
                {
                    label: "Acceptable use policy",
                    href: "/legal/acceptable-use-policy",
                    className: "text-gray-400 hover:text-[#ed5a2e] transition-colors duration-300",
                },
            ],
        },
        {
            title: "SUPPORT",
            links: [
                {
                    label: "FAQ",
                    href: "/faq",
                    className: "text-gray-400 hover:text-[#ed5a2e] transition-colors duration-300",
                },
            ],
        },
    ],
    copyright: {
        disclaimer:
            "TRCK is a leisure technology platform based in Nigeria. All experiences are provided by independent third-party creators. TRCK does not host or supervise these experiences and disclaims liability for third-party actions.",
        notice: "Trck Entertainment & Technology Ltd. All rights reserved.",
    },
};

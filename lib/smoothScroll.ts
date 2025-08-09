/**
 * Utility function for smooth scrolling to elements on the page
 */
export const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
): void => {
    e.preventDefault();

    if (href.startsWith('#')) {
        // Handle hash links (e.g., #about-us)
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    } else if (href.startsWith('/#')) {
        // Handle root hash links (e.g., /#about-us)
        const targetId = href.substring(2);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    } else {
        // For external links or non-hash links, navigate normally
        window.location.href = href;
    }
};

/**
 * Utility function for smooth scrolling with a delay (useful for mobile menus)
 */
export const handleSmoothScrollWithDelay = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string,
    delay: number = 100
): void => {
    e.preventDefault();

    setTimeout(() => {
        if (href.startsWith('#')) {
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else if (href.startsWith('/#')) {
            const targetId = href.substring(2);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else {
            window.location.href = href;
        }
    }, delay);
};

/**
 * Utility function to scroll to an element by ID (without event handling)
 */
export const scrollToElement = (elementId: string): void => {
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

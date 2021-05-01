import React from 'react';

const Link = ({ className, href, children}) => {
    const onClick = e => {
        e.preventDefault(); // Prevent full page reload.
        window.history.pushState({}, '', href); // Update URL.

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    
    return (
        <a 
            className={className}
            href={href}
            onClick={onClick}
        >
            {children}
        </a>
    );
};

export default Link;
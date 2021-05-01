import React from 'react';

const Link = ({ className, href, children}) => {
    const onClick = e => {
        if (e.ctrlKey || e.metaKey) {
            return; // Let the browser act naturally... Open up a new tab, and thus redownload the page.
        }

        e.preventDefault(); // Prevent full page reload.
        window.history.pushState({}, '', href); // Update URL.

        // Our emitter...
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
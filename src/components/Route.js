// FYI, we aren't using JSX here, so no need to import react.
import { useEffect } from 'react';

const Route = ({ path, children }) => {
    const onLocationChange = () => {
        console.log("Change");
    };

    useEffect(() => {
        window.addEventListener('popstate', onLocationChange)

        // Cleanup function, if we remove this component.
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    // If the current URL pathname matches the path, show (or 'return') the children.
    return window.location.pathname === path 
        ? children
        : null;
};



export default Route;
// FYI, we aren't using JSX here, so no need to import react.
import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
    // currentPath is used just for our route to update.
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    const onLocationChange = () => {
        // If a state changes, then the component refreshes... thus we can get a different view. 
        setCurrentPath(window.location.pathname);    
    };

    useEffect(() => {
        window.addEventListener('popstate', onLocationChange)

        // Cleanup function, if we remove this component.
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    // If the current URL pathname matches the path, show (or 'return') the children.
    return currentPath === path 
        ? children
        : null;
};



export default Route;
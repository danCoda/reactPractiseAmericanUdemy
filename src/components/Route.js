// FYI, we aren't using JSX here, so no need to import react.

const Route = ({ path, children }) => {
    // If the current URL pathname matches the path, show (or 'return') the children.
    return window.location.pathname === path 
        ? children
        : null;
};

export default Route;
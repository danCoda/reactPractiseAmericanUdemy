// FYI, we aren't using JSX here, so no need to import react.

const Route = ({ path, children }) => {
    return window.location.pathname === path 
        ? children
        : null;
};

export default Route;
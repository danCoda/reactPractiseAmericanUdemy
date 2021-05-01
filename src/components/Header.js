import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">
                Accordiono
            </Link>
            <Link href="/list" className="item">
                Searcho
            </Link>
            <Link href="/dropdown" className="item">
                Dropdowno
            </Link>
            <Link href="/translate" className="item">
                Translateo
            </Link>
        </div>
    );
};

export default Header;
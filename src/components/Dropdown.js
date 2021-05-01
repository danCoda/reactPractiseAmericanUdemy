import React, { useState } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);

    const renderedOptions = options.map(o => {
        if (o.value === selected.value) return null;
        return (
            <div key={o.value} className="item" onClick={() => onSelectedChange(o)}>
                {o.label}
            </div>
        );
    });

    return (
        <div className="ui form">
            <div className="field">
                <div className="label">
                    Select a colour
                </div>
                <div 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                    onClick={() => setOpen(!open)}
                    >

                    <i className="dropdown icon"></i>
                    <div className="text">
                        {selected.label}
                    </div>
                    <div className={`menu ${ open ? 'visible transition' : ''} `}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
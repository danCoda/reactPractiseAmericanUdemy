import React from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const renderedOptions = options.map(o => {
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
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">
                        {selected.label}
                    </div>
                    <div className="menu visible transition">
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
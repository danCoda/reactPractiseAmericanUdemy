import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        // This is our manual event handler (because it's like 'document.body.addEventListener()'). 
        // We are using a manual even handler to handle the clicks outside of anything, i.e. outside the dropdown.
        // Since it's manual, it will be invoked before the other 'react created' ones like onClick().
        // We use the ref (react hook) to check if the source of the click (event.target) is within our ref DOM (I'll call this "Check"). 
        //  If check succeeds (click was done in the dropdown), this manual handler doesn't need to do anything; the onClick will close the dropdown.
        //      This is needed because otherwise setOpen will be done twice; in this manual handler, and the react handler. 
        //  If check fails (click was done outside the dropdown), the manual handler can close the dropdown.

        // If user clicks outside the dropdown, hide it.
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) return;
            setOpen(false);
        };
        document.body.addEventListener('click', onBodyClick, {
            capture: true
        });

        // Our useEffect's cleanup code... so that if this Dropdown component gets removed, the click handler stops (because our ref will also be removed... thus will lead to errors in ref.current.contains, because ref.current becomes null when the DOM's removed.).
        return () => {
            document.body.removeEventListener('click', onBodyClick, {
                capture: true
            });
        }

    }, []); // Only set the click handler once at first render.

    const onOptionClick = option => {
        onSelectedChange(option);
    }

    const renderedOptions = options.map(o => {
        if (o.value === selected.value) return null;
        return (
            <div key={o.value} className="item" onClick={() => onOptionClick(o)}>
                {o.label}
            </div>
        );
    });

    return (
        <div>
            <div className="ui form" ref={ref} >
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
        </div>
    );
};

export default Dropdown;
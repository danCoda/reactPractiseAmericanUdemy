import React, { useState } from 'react';

const Accordion = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = index => {
        setActiveIndex(index);
    }

    const renderedItems = props.items.map((item, i) => {
        return <React.Fragment key={item.title}>
            <div className="title active" onClick={() => onTitleClick(i)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className="content active">
                <p>
                    {item.content}
                </p>
            </div>
        </ React.Fragment>
    });
    return (
        <div className="ui styled accordion">
            {renderedItems}
            <h1>{activeIndex}</h1>
        </div>
    );
}

export default Accordion;
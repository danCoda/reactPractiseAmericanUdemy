import react, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
    {
        title: 'What\'s React?',
        content: 'React is a frontend JavaScript framework.'
    },
    {
        title: 'What are React Hooks?',
        content: 'Hooks are functions that give functional components the advantages of class components, like lifecycle methods and state.'
    },
    {
        title: 'What are needed in class components, that are\nt needed in functional components?',
        content: 'Class components need a render function, which returns JSX. Functional components just need to return JSX. Class components must also extend "React.Components".'
    }
]

const options = [
    {
        label: "The colour red",
        value: "red"
    },
    {
        label: "The colour green",
        value: "green"
    },
    {
        label: "The colour blue",
        value: "blue"
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* Search /> */}
            <Dropdown 
                options={options} 
                selected={selected} 
                onSelectedChange={setSelected} 
            />
        </div>
    );
}


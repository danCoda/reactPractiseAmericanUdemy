import react, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

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
            <Route path="/">
                <Accordion items={items} />
            </ Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="Select a colour"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
                <div id="coloured-text" style={{ color: selected.value }}>I am coloured!</div>
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
}


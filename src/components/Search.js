import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const searchWiki = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });
            setResults(data.query.search);
        }

        const timeoutId = setTimeout(() => {
            if (term) searchWiki();
        }, 500);

        // Cleanup function... Stops our timeout, so that it can be restarted.
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };

    }, [term]);

    const renderedResults = results.map(r => {
        return (
            <div className="item" key={r.pageid}>
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`http://en.wikipedia.org?curid=${r.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {r.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: r.snippet}}></span>
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        className="input" 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

export default Search;
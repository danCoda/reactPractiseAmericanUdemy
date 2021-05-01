import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    // "Debounced text" is the text we want to translate... but we request for a translation only if 'text' doesn't change for 500ms; save bandwidth.
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            if (timerId) clearTimeout(timerId);
        }
    }, [text]);

    useEffect(() => {
        // This helper function's needed because useEffect can't directly do asynchronous code.
        const doTranslation = async() => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(data.data.translations[0].translatedText);
        };
        doTranslation();
    }, [language, debouncedText]);

    return (
        <div className="ui header">
            <h1>{translated}</h1>
        </div>
    );
};

export default Convert;


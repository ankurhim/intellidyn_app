import React from 'react';

const useInput = () => {
    const [input, setInput] = React.useState({});

    const handleChange = e => {
        e.preventDefault();
        setInput({...input, [e.target.name]: e.target.value});
        return input;
    };

    return {
        input,
        handleChange
    };
}

export default useInput;
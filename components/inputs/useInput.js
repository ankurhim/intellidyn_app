import React from 'react';

const useInput = () => {
    const [input, setInput] = React.useState("");

    const handleInput = e => {
        e.preventDefault();
        setInput({...input, [e.target.name]: e.target.value});
    };

    return {
        input,
        handleInput
    };
};

export default useInput;
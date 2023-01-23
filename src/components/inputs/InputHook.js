import React from 'react';

const InputHook = () => {
    const [input, setInput] = React.useState("");

    const handleChange = e => {
        e.preventDefault();
        setInput({...input, [e.target.name]: e.target.value});
    };

    return { input, handleChange };
};

export default InputHook;
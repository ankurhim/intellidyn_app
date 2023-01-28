import React from 'react';
import {InputContext} from '../../contexts/inputContext';

const useButton = () => {
    const {input} = React.useContext(InputContext);
    const [user, setUser] = React.useState({});

    const handleSubmit = e => {
        e.preventDefault();
        setUser(input)
    }

    return {
        user,
        handleSubmit
    };
}

export default useButton;
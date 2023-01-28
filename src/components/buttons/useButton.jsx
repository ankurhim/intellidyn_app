import React from 'react';
import {Context} from '../../contexts/Context';

const useButton = () => {
    const {input} = React.useContext(Context);
    const [data, setData] = React.useState({});

    const handleSubmit = e => {
        e.preventDefault();
        setData(input)
    }

    return {
        data,
        handleSubmit
    };
}

export default useButton;
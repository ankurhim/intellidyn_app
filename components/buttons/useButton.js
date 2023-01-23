import React from 'react';
import InputContext from '../../contexts/inputContext';

const useButton = () => {
    const inputCtx = React.useContext(InputContext);

    const handleClick = e => {
        e.preventDefault();
        console.log(inputCtx);
    };

    return handleClick;
};

export default useButton;
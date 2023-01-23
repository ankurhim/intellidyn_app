import React from 'react';
import useInput from './useInput.js';
import InputContext from '../../contexts/inputContext';

const Inputbuilder = ({items}) => {
    const { input, handleInput } = useInput();

    return(
        items.map((item, k) => (
        <InputContext.Provider value={{...input, handleInput}} key={k}>
            <div className={item.name + "-input-control"}>
                <label className={item.name + "-label"} htmlFor={item.name}>{item.label}</label>
                <input
                className={item.name + "-input"}
                name={item.name}
                id={item.name}
                type={item.type}
                value={input.val}
                onChange={handleInput}
                />
            </div>
        </InputContext.Provider>
        ))
    )
};

export default Inputbuilder;
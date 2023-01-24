import React from 'react';
import useInput from './useInput';
import {InputContext} from '../../contexts/inputContext';

const Inputbuilder = ({fields}) => {
    const { input, handleChange } = useInput();

    return (
        <InputContext.Provider value={{input, handleChange}}>
            <div>
                {fields.map((field, k) => (
                    <div key={k}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input
                    name={field.name}
                    id={field.name}
                    type={field.type}
                    value={input.val}
                    onChange={handleChange}
                    />
                    </div>
                ))}
            </div>
        </InputContext.Provider>
    )
}

export default Inputbuilder;
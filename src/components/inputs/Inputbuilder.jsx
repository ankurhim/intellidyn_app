import React from 'react';
import useInput from './useInput';
import {Context} from '../../contexts/Context';

const Inputbuilder = ({fields, Children}) => {
    const { input, handleChange } = useInput();

    return (
        <Context.Provider value={{input, handleChange}}>
            <div>
                {fields.map((field, k) => (
                    <div key={k}>
                    <label htmlFor={field.name}>{field.label} : </label>
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
            <div>
                <Children />
            </div>
        </Context.Provider>
    )
}

export default Inputbuilder;
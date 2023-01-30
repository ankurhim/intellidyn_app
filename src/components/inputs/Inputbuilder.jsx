import React from 'react';
import useInput from './useInput';
import {Context} from '../../contexts/Context';

const Inputbuilder = ({fields, Children}) => {
    const { input, handleChange } = useInput();

    return (
        <Context.Provider value={{input, handleChange}}>
            <div className="w3-row-padding">
                <div className="w3-container w3-margin-bottom">
                    {fields.map((field, k) => (
                        <div key={k} className="w3-section">
                        <label htmlFor={field.name}>{field.label}</label>
                        <input
                        className="w3-input w3-border"
                        name={field.name}
                        id={field.name}
                        type={field.type}
                        value={input.val}
                        onChange={handleChange}
                        />
                        </div>
                    ))}
                    <div>
                        <Children />
                    </div>
                </div>
            </div>
        </Context.Provider>
    )
}

export default Inputbuilder;
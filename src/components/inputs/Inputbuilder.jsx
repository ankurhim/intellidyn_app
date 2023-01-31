import React from 'react';
import useInput from './useInput';
import {Context} from '../../contexts/Context';

const Inputbuilder = ({fields, Children}) => {
    const { input, handleChange } = useInput();

    return (
        <Context.Provider value={{input, handleChange}}>
            <form>
                <div>
                    {fields.map((field, k) => (
                        <div key={k}>
                            <input
                            name={field.name}
                            id={field.name}
                            placeholder={field.label}
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
            </form>
        </Context.Provider>
    )
}

export default Inputbuilder;
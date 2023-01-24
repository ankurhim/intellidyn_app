import React from 'react';
import {InputContext} from '../../contexts/inputContext';

const Buttonbuilder = () => {
    const {input, handleChange} = React.useContext(InputContext);

    return (
        <div>
            <button onClick={handleChange}>Submit</button>
        </div>
    )
}

export default Buttonbuilder;
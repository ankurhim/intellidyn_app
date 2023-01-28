import React from 'react';
import {InputContext} from '../../contexts/inputContext';

const Buttonbuilder = () => {
    const {input} = React.useContext(InputContext);

    return (
        <>
        <div>
            <button onClick={() => console.log(input)}>Submit</button>
        </div>
        <div>
            Results:
            <div>
                Username: {input.name}
                Password: {input.password}
            </div>
        </div>
        </>
    )
}

export default Buttonbuilder;
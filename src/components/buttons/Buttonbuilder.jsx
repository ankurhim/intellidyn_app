import React from 'react';
import useButton from './useButton';

const Buttonbuilder = () => {
    const { user, handleSubmit } = useButton();

    return (
        <>
        <div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>
            Results:
            <div>
                Username: {user.name}
                Password: {user.password}
            </div>
        </div>
        </>
    )
}

export default Buttonbuilder;
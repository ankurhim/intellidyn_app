import React from 'react';
import useButton from './useButton';

const Buttonbuilder = () => {
    const { user, handleSubmit } = useButton();
    
    const userDetails = Object.entries(user);

    return (
        <>
        <div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>
            Results:
            <div>
                {userDetails.map((user, k) => (
                    <div key={k}>{user[0]} : {user[1]}</div>
                ))} <br/>
            </div>
        </div>
        </>
    )
};

export default Buttonbuilder;
import React from 'react';
import useButton from './useButton';

const Buttonbuilder = () => {
    const { data, handleSubmit } = useButton();
    
    const dataValues = Object.entries(data);

    return (
        <>
            <button
            type="button"
            onClick={handleSubmit}
            >
                Submit
            </button>
        <div>
            Results:
            <div>
                {dataValues.map((data, k) => (
                    <div key={k}>{data[0]} : {data[1]}</div>
                ))} <br/>
            </div>
        </div>
        </>
    )
};

export default Buttonbuilder;
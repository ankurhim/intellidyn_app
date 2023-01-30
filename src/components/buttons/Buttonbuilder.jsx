import React from 'react';
import useButton from './useButton';

const Buttonbuilder = () => {
    const { data, handleSubmit } = useButton();
    
    const dataValues = Object.entries(data);

    return (
        <>
        <div>
            <button className="w3-button w3-black w3-margin-bottom" onClick={handleSubmit}><i class="fa fa-paper-plane w3-margin-right"></i>Submit</button>
        </div>
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
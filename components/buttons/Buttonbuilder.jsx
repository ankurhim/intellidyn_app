import React from 'react';
import useButton from './useButton.js';

const Buttonbuilder = ({items}) => {

    return(
        items.map((item, k) => (
            <div className={item.name + "-button-control"} key={k}>
                <button
                className={item.name + "-button"}
                type="submit"
                onClick={useButton.handleClick}
                >
                    {item.label}
                </button>
            </div>
        ))
    )
};

export default Buttonbuilder;
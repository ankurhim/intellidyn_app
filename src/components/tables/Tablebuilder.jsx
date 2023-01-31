import React from 'react';

const Tablebuilder = ({items}) => {

    let rows = [];
    if (items.length !== 0) {
        for (let i=0; i <= items.length; i++) {
            rows.push(Object.values(items[i]));
        };
    }

    return (
        <div>           
            <div>
                <table>
                <thead>
                    <tr>
                        {items.length !== 0 ? Object.keys(items[0]).map((ent, k) => (

                                <th key={k}>{ent}</th>
                        )) : undefined}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {rows.map((row, k) => (
                            <td key={k}>{row}</td>
                        ))}
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default Tablebuilder;
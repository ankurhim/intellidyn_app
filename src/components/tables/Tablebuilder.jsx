import React from 'react';

const Tablebuilder = ({items}) => {

    return (
        <div>
            <table>
                <tr>
                    {items.map((head, k) => (
                    <th key={k}>{head}</th>
                    ))}
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
            </table>
        </div>
    )
}

export default Tablebuilder;
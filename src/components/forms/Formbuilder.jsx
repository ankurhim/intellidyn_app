import React from 'react';
import Inputbuilder from '../inputs/Inputbuilder';
import InputHook from '../inputs/InputHook';

const FormContext = React.createContext(null);

const Formbuilder = () => {
    const {input} = InputHook();
    return (
        <FormContext.Provider value={input}>
            <div className="input-control">
                <Inputbuilder fields={inputFields} />
            </div>
            <ChildComponent input = {input}></ChildComponent>
        </FormContext.Provider>
    )
};

const ChildComponent = () => {
    const detailContextData = React.useContext(FormContext);
    
    return (
    <div>
      <h3>This is the Sub Child component</h3>
      <h4>Name: {detailContextData.name}</h4>
      <h4>Username: {detailContextData.username}</h4>
      <h4>Age: {detailContextData.password}</h4>
    </div>
    )
}

export default Formbuilder;

const inputFields = [
    {
        name:"name",
        label: "Name",
        type: "text"
    },
    {
        name: "username",
        label: "Username",
        type: "text"
    },
    {
        name: "password",
        label: "Password",
        type: "password"
    }
];
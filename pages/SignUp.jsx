import Inputbuilder from '../components/inputs/Inputbuilder';
import Buttonbuilder from '../components/buttons/Buttonbuilder';
import React from 'react';

const SignUp = () => {
    return(
        <>
        <Inputbuilder items={inputList} />
        <Buttonbuilder items={buttonList} />
        </>
    )
};

export default SignUp;

const inputList = [
  {
    label: "Name",
    name: "name",
    value: "",
    type: "text"
  },
  {
    label: "Password",
    name: "password",
    value: "",
    type: "password"
  }
];

const buttonList = [
  {
    name: "submit",
    label: "Submit"
  }
];
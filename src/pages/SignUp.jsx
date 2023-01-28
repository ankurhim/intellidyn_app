import Inputbuilder from '../components/inputs/Inputbuilder';
import Buttonbuilder from '../components/buttons/Buttonbuilder';

const SignUp = () => {
    return (
        <>
        <Inputbuilder fields={inputFields} Children={Buttonbuilder}/>
        </>
    )
}

export default SignUp;

const inputFields = [
    {
        label: "First Name",
        name: "firstName",
        type: "text"
    },
    {
        label: "Middle Name",
        name: "middleName",
        type: "text"
    },
    {
        label: "Last Name",
        name: "lastName",
        type: "text"
    },
    {
        label: "Username",
        name: "username",
        type: "text"
    },
    {
        label: "Password",
        name: "password",
        type: "password"
    }
];
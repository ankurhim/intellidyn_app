import Inputbuilder from '../components/inputs/Inputbuilder';
import Buttonbuilder from '../components/buttons/Buttonbuilder';

const SignIn = () => {
    return (
        <>
        <Inputbuilder fields={inputFields} Children={Buttonbuilder}/>
        </>
    )
}

export default SignIn;

const inputFields = [
    {
        label: "Name",
        name: "name",
        type: "text"
    },
    {
        label: "Password",
        name: "password",
        type: "password"
    }
]
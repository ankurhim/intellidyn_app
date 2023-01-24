import Inputbuilder from '../components/inputs/Inputbuilder';
import Buttonbuilder from '../components/buttons/Buttonbuilder';

const SignUp = () => {
    return (
        <>
        <Inputbuilder fields={inputFields} />
        <Buttonbuilder />
        </>
    )
}

export default SignUp;

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
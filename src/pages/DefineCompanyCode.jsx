import Inputbuilder from '../components/inputs/Inputbuilder';
import Buttonbuilder from '../components/buttons/Buttonbuilder';

const DefineCompanyCode = () => {
    return (
        <>
        <Inputbuilder fields={inputFields} Children={Buttonbuilder}/>
        </>
    )
}

export default DefineCompanyCode;

const inputFields = [
    {
        label: "Company Key",
        name: "company_key",
        type: "text"
    },
    {
        label: "Company Name",
        name: "company_name",
        type: "text"
    },
    {
        label: "Company Name 2",
        name: "company_name_2",
        type: "text"
    },
    {
        label: "Street",
        name: "street",
        type: "text"
    },
    {
        label: "Postal Code",
        name: "postal_code",
        type: "text"
    },
    {
        label: "City",
        name: "city",
        type: "text"
    },
    {
        label: "Country",
        name: "country",
        type: "text"
    },
    {
        label: "Language",
        name: "language",
        type: "text"
    },
    {
        label: "Currency",
        name: "currency",
        type: "text"
    },
    {
        label: "View Maintenance",
        name: "view_maintenance",
        type: "text"
    },
    {
        label: "Request",
        name: "request",
        type: "text"
    },
    {
        label: "Short Description",
        name: "short_desc",
        type: "text"
    }
];
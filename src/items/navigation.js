import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import DefineCompany from '../pages/DefineCompany';
import DefineCompanyCode from '../pages/DefineCompanyCode';
import ListCompanies from '../pages/ListCompanies';
import ListCompanyCodes from '../pages/ListCompanyCodes';

const navigation = [
    {
        link: "/",
        label: "Sign Up",
        element: <SignUp/>
    },
    {
        link: "/signin",
        label: "Sign In",
        element: <SignIn />
    },
    {
        link: "/define_company",
        label: "Define Company",
        element: <DefineCompany />
    },
    {
        link: "/define_company_code",
        label: "Define Company Code",
        element: <DefineCompanyCode />
    },
    {
        link: "/list_companies",
        label: "List Companies",
        element: <ListCompanies />
    },
    {
        link: "/list_company_codes",
        label: "List Company Codes",
        element: <ListCompanyCodes />
    }
];

export default navigation;
import Navigation from '../navigation/Navigationbuilder';
import Routebuilder from '../routes/Routebuilder';
import navigation from '../../items/navigation';
import Dropdownbuilder from '../dropdowns/Dropdownbuilder';

const Main = () => {
    return (
        <div className="container m-1">
            <div className="row">
                <div className="col-xxl-12 p-1 bg-dark">
                    <Dropdownbuilder props={dropItems}/>
                </div>
                <div className="col-sm-3 p-1 bg-primary">
                    Sidebar
                    <Navigation navs={navigation}/>
                </div>
                <div className="col-sm-9 p-1 bg-secondary h-75">
                    Main
                    <Routebuilder routes={navigation} />
                </div>
                <div className="col-xxl-12 p-1 bg-danger">
                    Footer
                </div>
            </div>
        </div>
    )
};

export default Main;

const dropItems = [
    {
        link: "/new",
        label: "New",
    },
    {
        link: "/open",
        label: "Open"
    }
]
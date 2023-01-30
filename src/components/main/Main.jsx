import Navigation from '../navigation/Navigationbuilder';
import Routebuilder from '../routes/Routebuilder';
import navigation from '../../items/navigation';

const Main = () => {
    return (
        <div className="w3-row">
            <div className="w3-container w3-blue">
                <h4>Header</h4>
            </div>
            <div className="w3-col w3-container" style={{width:"20%"}}>
                <Navigation navs={navigation}/>
            </div>
            <div className="w3-col w3-container" style={{width: "80%"}}>
                <Routebuilder routes={navigation} />
            </div>
        </div>
    )
};

export default Main;
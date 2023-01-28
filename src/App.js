import Navigation from './components/navigation/Navigationbuilder';
import navigation from './items/navigation';
import Routebuilder from './components/routes/Routebuilder';
import  { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

const AppRouter = () => {
  return (
    <Router>
      <Navigation navs={navigation}/>
      <Routebuilder routes={navigation} />
    </Router>
  )
};

export default AppRouter;
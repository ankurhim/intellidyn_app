import  { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/main/Main';
import './App.css';

const AppRouter = () => {
  return (
    <Router>
      <Main />
    </Router>
  )
};

export default AppRouter;
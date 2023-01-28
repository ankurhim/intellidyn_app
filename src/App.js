import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import  { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
          <Link to="/">SignUp</Link>
          </li>
          <li>
          <Link to="/signin">SignIn</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
        <Route path="/" exact component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </Routes>
      </div>
    </Router>
  )
};

export default AppRouter;
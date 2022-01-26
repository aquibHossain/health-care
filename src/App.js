import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignUp from './components/Signup/SignUp';
import PerService from './components/PerService/PerService';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="sign">
     <AuthProvider>
     <BrowserRouter>
     <Header></Header>
     <Switch>
        <Route exact path="/">
             <Home></Home>
        </Route>
        <Route path="/home">
             <Home></Home>
        </Route>
        <PrivateRoute exact path="/service">
             <Services></Services>
        </PrivateRoute >
        <PrivateRoute  path="/service/:perId">
             <PerService></PerService>
        </PrivateRoute >
        <Route path="/about">
             <About></About>
        </Route>
        <Route path="/signup">
             <SignUp></SignUp>
        </Route>
        <Route path="/login">
             <Login></Login>
        </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;

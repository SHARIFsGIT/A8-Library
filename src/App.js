import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch , Route } from 'react-router-dom';
import Home from './Component/Home/Component';
import Services from './Component/Services/Services';
import About from './Component/About/About';
import Teachers from './Component/Teachers/Teachers';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
    <Header></Header>
     <Switch>
       <Route exact path="/home" >
         <Home></Home>
       </Route>
       <Route path="/services" >
         <Services></Services>
       </Route>
       <Route path="/about" >
         <About></About>
       </Route>
       <Route path="/teachers" >
         <Teachers></Teachers>
       </Route>
       <Route path="*" >
        <PageNotFound></PageNotFound>
       </Route>
       <Route path="/" >
         <Home></Home>
       </Route>
     </Switch>
     <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

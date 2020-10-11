import React from 'react';

//react-router-dom
import { BrowserRouter, Route, Switch} from 'react-router-dom';



//Components
import Header from './Header';
import Footer from './Footer';
import Home from './Home'
import Profile from './Profile'
import About from './About'
import Contact from './Contact'



const Routings=()=> {

    return (<>
       <BrowserRouter>

            {  /*  NAVBAR   */}

                <Header />

            {  /*  NAVBAR   */}


           


            {  /* MAIN CONTENT   */}
           
        <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/home" component={Home}/>
           <Route path="/profile" component={Profile} />
           <Route path="/about" component={About} />
           <Route path="/contact" component={Contact} />
           
   
           
         </Switch>
          
        
         <Footer/>



    </BrowserRouter>
    </>)
}


export default Routings;
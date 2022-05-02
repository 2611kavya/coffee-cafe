import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Gallery from './Components/Gallery';
import Review from './Components/Review';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import Chef from './Components/Chef';
import Login from './Components/Login';
import Footer from './Components/Footer';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        
          <main>
          <section>
            <Routes>
              <Route path="/" exact element={<Home/>}/>
              <Route path="/about" exact element={<About/>}/>
              <Route path="/menu" exact element={<Menu/>}/>
              <Route path="/gallery" exact element={<Gallery/>}/>
              <Route path="/review" exact element={<Review/>}/>
              <Route path="/blog" exact element={<Blog/>}/>
              <Route path="/chef" exact element={<Chef/>}/>
              <Route path="/contact" exact element={<Contact/>}/>
              <Route path="/login" exact element={<Login/>}/>
             
              
              
            </Routes>
          </section>
          </main>
            <Footer/> 
      </Router>
      

    </div>
   
   
  );
}

export default App;

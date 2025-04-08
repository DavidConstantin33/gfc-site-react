import Header from './header.js';
import About from './about.js';
import Training from './trainingTest.js';
import PrimulAntrenament from './primulantrenament';
import Locatie from './locatie.js'
import Contact from './contact.js';
import Footer from './footer.js';
import FirstPage from "./firstpage.js";

function App() {
  return (<div className="app">
    <Header/>
    <FirstPage/>
    <About/>
    <Training/>
    <PrimulAntrenament/>
    <Locatie/>
    <Contact/>
    <Footer/>
  </div>);
}

export default App;


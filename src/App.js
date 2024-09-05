import { Helmet } from 'react-helmet';
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Project from "./components/Project/project";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
    <Helmet>
        <meta name="google-site-verification" content="AWZz69W_ceCGK5fRsMw7M6pSXxBRnAgCrGX2BsXKGQk" />
        <title>My Portfolio Site</title>
        <meta name="description" content="My Portfolio Site" />
      </Helmet>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

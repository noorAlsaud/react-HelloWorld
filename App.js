import './css/styles.css';
import NavBar from './navBar';
import MasterHead from './masterHead';
import Portfolio from './portfolioSection';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import Copyright from './copyRight';
import PortfolioModals from './portfolioModals';
function App() {
  return (
    <div>
      {/* Navigation*/}
      <NavBar />

      {/* Masthead*/}
      <MasterHead />

      {/* Portfolio Section*/}
      <Portfolio />

      {/* About Section*/}
      <About />

      {/* Contact Section*/}
      <Contact />

      {/* Footer*/}
      <Footer />
      {/* Copyright Section*/}
      <Copyright />
      {/* Portfolio Modals*/}
      <PortfolioModals />


    </div>

  );
}

export default App;

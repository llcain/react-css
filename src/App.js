
import './App.css';
import './Gallery.css';
import './About.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import About from './components/About';
import Grid from './components/Grid';

function App() {
  const title = "Welcome to the new blog.";
  return (
    <div className='App'>
      <div className="content">
        <h1>{ title }</h1>
      <Navbar />
      <About />
      <Grid />
      <Gallery />
      <Footer />
      </div>
    </div>
  );
}

export default App;

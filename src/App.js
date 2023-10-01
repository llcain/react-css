import './Frame.css';
import './App.css';
import './Gallery.css';
import './About.css';

import Footer from './components/Footer';
import Frame from './components/Frame';
import Car from './components/Car';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Gallery from './components/Gallery';
import About from './components/About';

function App() {
  const title = "Welcome to the new blog.";
  return (
    <div className='App'>
      <div className="content">
        <h1>{ title }</h1>
      <Navbar />
      <About />
      <Frame />
      <Car />
      <Users />
      <Gallery />
      <Footer />
      </div>
    </div>
  );
}

export default App;

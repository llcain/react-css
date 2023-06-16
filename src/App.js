import './Frame.css';
import './App.css';

import Footer from './components/Footer';
import Frame from './components/Frame';
import Car from './components/Car';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Gallery from './components/Gallery';

function App() {
  return (
    <>
      <Navbar />
      <Frame />
      <Car />
      <Users />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;

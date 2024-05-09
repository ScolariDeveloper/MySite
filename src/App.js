// App.js
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './AnimatedRoutes'; // Import corretto
import './styles.css';

function App() {

  return (
    <Router>
        <div className="app">
          <Navbar />
          <main className="container">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
    </Router>
  );
}

export default App;

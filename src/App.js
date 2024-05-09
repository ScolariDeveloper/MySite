import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTopOnMount from './components/ScrollToTopOnMount';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { NavigationProvider } from './NavigationContext';
import { Router as AppRouter } from './routes';
import './styles.css';

function App() {
  return (
    <Router>
      <NavigationProvider>
        <div className="app">
          <Navbar />
          <main className="container">
            <ScrollToTopOnMount />
            <AppRouter />
          </main>
          <Footer />
        </div>
      </NavigationProvider>
    </Router>
  );
}

export default App;

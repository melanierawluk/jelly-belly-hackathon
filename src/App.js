import './App.scss';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import BeanDetailsPage from './pages/BeanDetailsPage/BeanDetailsPage';
import BeanListPage from './pages/BeanListPage/BeanListPage';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Route path="/" element={<LandingPage />} />
          <Route path="/beans" element={<BeanListPage />} />
          <Route path="/beans/:beanId" element={<BeanDetailsPage />} />
        </Router>

      </BrowserRouter>
    </div>
  );
}

export default App;

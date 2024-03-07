import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BeanDetailsPage from './pages/BeanDetailsPage/BeanDetailsPage';
import BeanListPage from './pages/BeanListPage/BeanListPage';
import LandingPage from './pages/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [beanList, setBeanList] = useState("");

  useEffect(() => {
    const getBeans = async () => {
      try {
        const response = await axios.get("https://jellybellywikiapi.onrender.com/api/Beans?pageSize=50")
        console.log(response.data.items)
        setBeanList(response.data.items)
      } catch (error) {
        console.log(error)
      }
    }
    getBeans();
  }, [])


  return (
    <div className="App">
      <NavBar beanList={beanList} setBeanList={setBeanList} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/beans" element={<BeanListPage beanList={beanList} />} />
          <Route path="/beans/:id" element={<BeanDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

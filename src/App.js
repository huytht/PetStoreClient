import "./App.css";
import Header from './common/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Footer from "./common/footer/Footer";
import PetDetailPage from "./pages/PetDetailPage";

const App = () =>{
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact element={<HomePage/>}/>
          <Route path='/product/:id'  element={<PetDetailPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

import "./App.css";
import Header from './common/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Footer from "./common/footer/Footer";
import PetDetailPage from "./pages/PetDetailPage";
import UserDetailPage from "./pages/UserDetailPage";
import { Toaster } from 'react-hot-toast';

const App = () =>{
  return (
    <>
    <Toaster
      position="bottom-center"
      reverseOrder={false}
    />
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact element={<HomePage/>}/>
          <Route path='/product/:id' element={<PetDetailPage/>}/>
          <Route path='/profile' element={<UserDetailPage/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </>
  );
}

export default App;

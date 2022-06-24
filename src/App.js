import "./App.css";
import Header from "./common/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./common/footer/Footer";
import PetDetailPage from "./pages/PetDetailPage";
import UserDetailPage from "./pages/UserDetailPage";
import { Toaster } from "react-hot-toast";
import CartPage from "./pages/CartPage";
import { ProductPage } from "./pages/ProductPage";

const App = () => {
  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        containerStyle={{
          zIndex: "10000",
        }}
      />
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/product/:id" element={<PetDetailPage />} />
          <Route path="/profile" element={<UserDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/pages/:categoryId/:breedId" element={<ProductPage />} />
          <Route path="/pages/:categoryId" element={<ProductPage />} />
          <Route path="/pages" element={<ProductPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;

import { useEffect } from "react";
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
import CheckoutForm from "./components/Checkout/CheckoutForm";
import { Helmet } from "react-helmet";
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";
import useGaTracker from "./components/googleAnalytics/cofigGoogleAnalytics";

const App = () => {
  useGaTracker();
  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        containerStyle={{
          zIndex: "10000",
        }}
      />
      <MessengerCustomerChat
        pageId="105898941761897"
        appId="783041989536896"
      />,
      {/* <Router> */}
        <Header />
        {/* <Helmet>
          <title>OkaKoro Store</title>
          <meta 
            name="description"
            content="Bạn sẽ tìm được thú cưng yêu thích của mình tại đây"
          />
          <meta name="keywords" content="OkaKoro Store, Home, Pages, Categories"/>
        </Helmet> */}
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="**" element={<HomePage />} />
          <Route path="/product/:slug-:id" element={<PetDetailPage />} />
          <Route path="/profile" element={<UserDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/pages/:keyword/:categoryId/:breedId" element={<ProductPage />} />
          <Route path="/pages/:categoryId/:breedId" element={<ProductPage />} />
          <Route path="/pages/:categoryId" element={<ProductPage />} />
          <Route path="/pages" element={<ProductPage />} />         
         <Route path="/checkout" element={<CheckoutForm />} />
        </Routes>
        <Footer />
      {/* </Router> */}
    </>
  );
};

export default App;

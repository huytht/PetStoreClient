// import { useEffect } from "react";
import "./App.css";
import Header from "./common/header/Header";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import Footer from "./common/footer/Footer";
// import PetDetailPage from "./pages/PetDetailPage";
// import UserDetailPage from "./pages/UserDetailPage";
import { Toaster } from "react-hot-toast";
// import CartPage from "./pages/CartPage";
// import { ProductPage } from "./pages/ProductPage";
// import CheckoutForm from "./components/Checkout/CheckoutForm";
import { Helmet } from "react-helmet";
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";
import useGaTracker from "./components/googleAnalytics/cofigGoogleAnalytics";
import  Routess  from "./Routes";
const App = () => {
  useGaTracker();
  return (
    <>
      <Helmet>
          <title>OkaKoro Store</title>
          <meta 
            name="description"
            content="Bạn sẽ tìm được thú cưng yêu thích của mình tại đây"
          />
          <meta name="keywords" content="OkaKoro Store, Home, Pages, Categories"/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="http://38.242.132.213/"/>
          <meta property="og:title" content="OkoKaro Store"/>
          <meta property="og:description" content="OkaKoro - Thiên đường thú cưng"/>
          <meta property="og:image" content="http://38.242.132.213:3000/images/logo.png"/>
        </Helmet>
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
        <Routess/>
        <Footer />
      {/* </Router> */}
    </>
  );
};

export default App;

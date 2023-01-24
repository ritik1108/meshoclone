import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Address from "./Componant/Address/Address";
// import Checkout from "./Components/Checkout/Checkout";

import Home from "./Componant/Home/Home";
import Login from "./Componant/Login/Login";
// import Payment from "./Components/Payment/Paynment";
// import SignUp from "./Components/SignUp/Signup";

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import AddProduct from "./Components/AddProduct/AddProduct";
// import Orders from "./Components/Orders/Orders";

// const promise = loadStripe(
//   "pk_test_51KUDBXSE1AGsrDtwyXK8vcHYNkEOofJAP1vV1fRlpZNo93g4o80dZe4IvhAkBXo2ytDciCqqpynwQUXv7plCjezF00G9zyj4sc"
// );

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />

          { <Route path="/login" element={<Login />} />
          // <Route path="/checkout" element={<Checkout />} />
          // <Route path="/signup" element={<SignUp />} />
          // <Route path="/address" element={<Address />} /> 
        }
          {/* <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          /> */}

          {/* <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/orders" element={<Orders />} /> */}
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default App;

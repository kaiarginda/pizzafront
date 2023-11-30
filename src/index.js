import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Menus from "./Menus/Menus";
import Listings from "./Listings/Listings";
import Products from "./Products/Products";
import Sale from "./Sale/Sale";
import Daily from "./Daily/Daily";
import Testimonial from "./Testimonial/Testimonial";
import Top from "./Top/Top";
import News from "./News/News";
import Footer from "./Footer/Footer";
import Copyright from "./Copyright/Copyright";
import Recipe from "./Recipe/Recipe";
import { Routes } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import ItemDetails from "./ItemDetails/ItemDetails";
import Register from "./Register/Register";
import LoginForm from "./LoginForm/LoginForm";
import CreatePizzaForm from "./CreatePizzaForm/CreatePizzaForm";
import PizzaDetails from "./PizzaDetails/PizzaDetails";
import CreateUser from "./CreateUser/CreateUser";
import LoginPage from "./LoginPage/LoginPage";
import IndividualUser from "./IndividualUser/IndividualUser";
import IndividualProduct from "./IndividualProduct/IndividualProduct";
import ProductsList from "./ProductsList/ProductsList";
import ReviewPage from "./ReviewPage/ReviewPage";
import IndividualReview from "./IndividualReview/IndividualReview";
import ReviewList from "./ReviewList/ReviewList";
import CreatePost from "./CreatePost/CreatePost";
import IndividualPost from "./IndividualPost/IndividualPost";
import PostList from "./PostList/PostList";
import PostPage from "./PostPage/PostPage";
import Return from "./Return/Return";
import Terms from "./Terms/Terms";
import Contact from "./Contact/Contact";
import Map from "./Map/Map";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    {/* <App /> */}
    <Routes>
      <Route
        path="/"
        element={[
          <Navbar />,
          <Hero />,
          <Menus />,
          <Listings />,
          <Products />,
          <Sale />,
          <Daily />,
          <Testimonial />,
          <Top />,
          <News />,
          <Footer />,
          <Copyright />,
        ]}
      ></Route>

      {/* <Route path={`/register`} element={[<Register />]}></Route> */}
      {/* <Route path={`/login`} element={[<LoginForm />]}></Route> */}
      {/* <Route path={`/create-pizza`} element={[<CreatePizzaForm />]}></Route> */}
      <Route path="/create" element={[<CreatePizzaForm />]} />
      <Route path="/create-user" element={[<CreateUser />]} />
      <Route path="/log-in" element={[<LoginPage />]} />
      <Route path="/create-post" element={[<CreatePost />]} />
      <Route path="/review" element={[<ReviewPage />]} />

      <Route path="/pizza/:pizzaId" element={[<PizzaDetails />]} />
      <Route path="/user/:name" element={[<IndividualUser />]} />
      <Route path="/post/:id" element={[<PostPage />]} />

      <Route path="/products" element={[<ProductsList />]} />
      <Route path="/testimonial" element={[<ReviewList />]} />
      <Route path="/post" element={[<PostList />]} />
      <Route path="/return-policy" element={[<Return />]} />
      <Route path="/terms-of-use" element={[<Terms />]} />
      <Route path="/contact" element={[<Contact />]} />

      <Route path="/website-map" element={[<Map />]} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

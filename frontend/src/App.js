import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostScreen from "./screens/PostScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProposalScreen from "./screens/ProposalScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import EditPostScreen from "./screens/EditPostScreen";
import BidsListScreen from "./screens/BidsListScreen";
import BidDetailsScreen from "./screens/BidDetailsScreen";
import PlacedBidsScreen from "./screens/PlacedBidsScreen";

const App = () => {
  return (
    <Router>
      <div className="main-body">
        <Header />
        <main className="main-section">
          <Route path="/placedBids/:id" component={PlacedBidsScreen} />
          <Route path="/bids/:id" component={BidDetailsScreen} />
          <Route path="/edit/:id" component={EditPostScreen} />
          <Route path="/createPost" component={CreatePostScreen} />
          <Route path="/bidList/:id" component={BidsListScreen} />
          <Route path="/profile/:id" component={ProfileScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/post/:id" component={PostScreen} />
          <Route path="/proposal/:id" component={ProposalScreen} />
          <Route path="/" exact component={HomeScreen} />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

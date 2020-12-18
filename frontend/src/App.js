import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostScreen from './screens/PostScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import ProposalScreen from './screens/ProposalScreen';
import RegisterScreen from './screens/RegisterScreen';


const App = () => {
  
  return (
    <Router>
      <div className="main-body">
      <Header />
        <main className="main-section">
          <Route path="/register" component={RegisterScreen} />
          <Route path="/post/:id" component={ PostScreen } />
          <Route path="/proposal/:id" component={ ProposalScreen } />
          <Route path='/' exact component={ HomeScreen } />
      </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App;

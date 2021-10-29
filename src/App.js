//import { div } from "prelude-ls";
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
//import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from './components/pages/HomePage'
import ProductPage from "./components/pages/ProductPage";

//  const client = new ApolloClient({
//   uri: "/graphql",
//   cache: new InMemoryCache(),
//});

const App = () => {
  return (
    <Router>
    
    <Header />
    <main className='py-3'>
      <Container>
   <Route path='/' component={HomePage} exact />
   <Route path='/product/:id' component={ProductPage} />
   </Container>
   </main>
   <Footer />
    
    </Router>
  )
}

export default App;

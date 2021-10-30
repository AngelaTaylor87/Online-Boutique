import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
//import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from './pages/HomePage'
import ProductPage from "./pages/ProductPage";
import CartPage from './pages/CartPage'
import ContactPage from "./pages/ContactPage";
import SigninPage from "./pages/SigninPage";

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
      <Route path='/signin' component={SigninPage} exact />
      <Route path='/contact' component={ContactPage} exact />

      <Route path='/cart' component={CartPage} exact />

   <Route path='/product/:id' component={ProductPage} />
     
   <Route path='/' component={HomePage} exact />
   
   </Container>
   </main>
   <Footer />
    
    </Router>
  )
}

export default App;

//import { div } from "prelude-ls";
import React from "react";
import { Container } from 'react-bootstrap'
//import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './components/pages/Home'

// const client = new ApolloClient({
//   uri: "/graphql",
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <> 
    <Header />
    <main className='py-3'>
      <Container>
   <Home />
   </Container>
   </main>
   <Footer />
    </>
  )
}

export default App;

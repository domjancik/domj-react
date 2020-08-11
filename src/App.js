import React from 'react';
import Layout from './hoc/Layout/Layout';
import Projects from './components/Projects/Projects';
import Hero from './components/Hero/Hero';
function App() {
  return (
      
    <Layout>
      <Hero />
      <Projects />
    </Layout>
  );
}
export default App;

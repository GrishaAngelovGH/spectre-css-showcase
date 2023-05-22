import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <Layout header={<Navbar />}>
      <Hero
        title='Hero Title'
        subTitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, officiis laudantium.'
      />
    </Layout>
  );
}

export default App;

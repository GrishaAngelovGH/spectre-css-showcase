import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Accordion from './components/Accordion'
import Bar from './components/Bar'
import SliderBar from './components/SliderBar'

function App() {
  return (
    <Layout header={<Navbar />}>
      <Hero
        title='Hero Title'
        subTitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, officiis laudantium.'
      />
      <Accordion />
      <Bar />
      <SliderBar />
    </Layout>
  );
}

export default App;

import Accordion from './components/Accordion'
import Bar from './components/Bar'
import Breadcrumbs from './components/Breadcrumbs'
import Hero from './components/Hero'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import SliderBar from './components/SliderBar'

function App() {
  return (
    <Layout header={<Navbar />}>
      <Breadcrumbs />
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

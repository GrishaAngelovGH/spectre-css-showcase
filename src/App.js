import Accordion from './components/Accordion'
import Bar from './components/Bar'
import Breadcrumbs from './components/Breadcrumbs'
import Card from './components/Card'
import Chips from './components/Chips'
import EmptyState from './components/EmptyState'
import Hero from './components/Hero'
import Layout from './components/Layout'
import Menu from './components/Menu'
import Modal from './components/Modal'
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
      <Card />
      <Chips />
      <EmptyState />
      <Menu />
      <Modal />
    </Layout>
  );
}

export default App;

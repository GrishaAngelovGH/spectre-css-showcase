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
import Nav from './components/Nav'
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'
import PaginationControl from './components/PaginationControl'
import Panel from './components/Panel'
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
      <Nav />
      <Pagination />
      <PaginationControl />
      <Panel />
    </Layout>
  );
}

export default App;

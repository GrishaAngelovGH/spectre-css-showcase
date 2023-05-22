import Layout from './components/Layout'
import Navbar from './components/Navbar'

function App() {
  return (
    <Layout header={<Navbar />}>
      <h1>Body</h1>
    </Layout>
  );
}

export default App;

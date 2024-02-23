import './styles/main.scss'
import Header from './components/header';
import HomeSlider from './components/homeheader'
import Weare from './components/weare'
import Pagos from './components/pagos'
import Newslatter from './components/newslatter'
import Footer from './components/footer'
import ContainerOffers from './components/containeroffers'

function App() {
  return (
    <div className="App">
      <main className='main-principal'>
        <Header />
        <HomeSlider />
        <Weare />
        <ContainerOffers/>
        <Pagos />
        <Newslatter />
      </main>
      <Footer />
    </div>
  );
}

export default App;

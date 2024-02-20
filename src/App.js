import './styles/main.scss'
import Header from './components/header';
import HomeSlider from './components/homeheader'
import Offers from './components/offers';
import Weare from './components/weare'
import Pagos from './components/pagos'
import Newslatter from './components/newslatter'
import Footer from './components/footer'
import data from './data.json'

function App() {
  return (
    <div className="App">
      <main className='main-principal'>
        <Header />
        <HomeSlider />
        <Weare />
        {data.ofertas.map((paquete, index) => {
          if (index%2) {
            return (
              <Offers data={ paquete } reverse={true}/>
            )
          } else {
            return (
              <Offers data={ paquete }/>
            )
          }
        })}
        <Pagos />
        <Newslatter />
      </main>
      <Footer />
    </div>
  );
}

export default App;

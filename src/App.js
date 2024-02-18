import './styles/main.scss'
import Header from './components/header';
import HomeSlider from './components/homeheader'
import Offers from './components/offers';
function App() {
  return (
    <div className="App">
      <Header />
      <HomeSlider />
      <Offers/>
      <Offers reverse="true" />
    </div>
  );
}

export default App;

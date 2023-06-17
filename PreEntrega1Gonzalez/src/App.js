import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar ></Navbar>
      <ItemListContainer className="ItemListContainer" greeting="Holaaaa"></ItemListContainer>
    </div>
  );
}

export default App;

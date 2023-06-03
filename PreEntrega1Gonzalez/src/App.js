import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar ></Navbar>
      <ItemListContainer greeting="Holissss"></ItemListContainer>
    </div>
  );
}

export default App;

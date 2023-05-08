
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
function App() {
  return (
    <>
      <NavBar/>
      <ItemsListContainer greeting={'Sitio en construcción'}/>
    </>
  );
}

export default App;

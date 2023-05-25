
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemsListContainer />}/>
          <Route path='/categoria/:categoriaId' element={ <ItemsListContainer /> } />
          <Route path='/item/:itemId' element={ <ItemDetailContainer/> } />
          <Route path= '*' element ={<h1>404 pagina no encontrada</h1>}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

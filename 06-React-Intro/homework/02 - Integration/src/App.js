import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters from './data.js';

function App() {
function searchHandler(){
   window.alert("El ID que busco")
};
function closeHandler(){
   window.alert(`Se cierra la pestaña`)
};

   return (
      <div className='App'>
         <SearchBar onSearch={searchHandler} />
         <Cards characters={characters} onClose={closeHandler}/>
      </div>
   );
}

export default App;

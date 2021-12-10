import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

const task = new Promise ((resolve, reject) => {
  //reject('Mal')
  resolve('Todo ok')
})

function App() {

  task.then(dataRes => {console.log(dataRes)}, (err) => {console.log(err)})

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
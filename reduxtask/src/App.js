//import logo from './logo.svg';
import './App.css';
import AddToDo from './components/AddToDo';
import ToDoCount from './components/ToDoCount';
import ToDoList from './components/ToDoList';
function App() {
  return (
    <div className="App">
    <div className='display-3'>AppComponent</div>
    <hr></hr>
      <div className='row'>
      <div className='col-sm-4'><AddToDo/></div> 
      <div className='col-sm-4'><ToDoCount/></div>
      <div className='col-sm-4'> <ToDoList/></div>
    </div>
    </div>
  );
}

export default App;

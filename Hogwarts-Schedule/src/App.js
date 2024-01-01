import './App.css';
import HogwartsSchedule from './containers/HogwartsSchedule';

function App() {
  return (
    <div className="App">
      <h1 className='pb-5'>Hogwarts Schedule ReactJS App</h1>
      <div className="container">
        <div className="d-flex justify-content-around">
          <HogwartsSchedule />
        </div>
      </div>
    </div>
  );
}

export default App;

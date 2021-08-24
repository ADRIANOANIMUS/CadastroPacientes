import './App.css';
import Register from './components/Register';
import { Button } from 'reactstrap';

function App() {
  return (
    <div className="row" >
      <div className="col-md-8 offset-md-2">
      <Register/>
      </div>            
    </div>
  );
}

export default App;

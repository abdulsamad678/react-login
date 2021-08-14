import './App.css';

import { Signup } from './components/Signup';

function App() {
  return (
    <div className="container-fluid mt-9 ">
      <div className="row">
        <div className="col-lg-3 mx-auto">
          <Signup />
        </div>
        
      </div>
    </div>
  );
}

export default App;
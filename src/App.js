import logo from './logo.svg';
import './App.css';

import {Header} from './Components/Header';
import Body from './Components/Body';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div class="pt-5">
      <div class="shadow p-3 mb-5 bg-body rounded mx-auto" style={{height:"300px", width:"440px"}}>
        <div>
          <Header/>
          <Body/>
        </div>
      </div>
    </div>
  );
}

export default App;

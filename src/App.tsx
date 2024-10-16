import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import First_EN from './pages/1_en';
import First_SP from './pages/1_sp';
import Second_EN from './pages/2_en';
import Second_SP from "./pages/2_sp";
import Third_EN from './pages/3_en';
import Third_SP from './pages/3_sp';
import NotFound from './pages/404';
import Forth_EN from './pages/4_en';
import Forth_SP from './pages/4_sp';
import Fifth_EN from './pages/5_en';
import Fifth_SP from './pages/5_sp';
import Sixth_SP from './pages/6_en';
import S from './pages/7'
import New from './pages/8'
import Model from './pages/9'
import Spain from './pages/10'
import Engca from './pages/engca'
import Visits from "./pages/visits";
import Engaca3 from "./pages/engaca3";
import Tsf from './pages/Tsf';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
        
          {/* <Route path = "/engaca1" element = {<First_EN />} />
          
          <Route path = "/engaca2" element = {<Second_EN />} />
          <Route path = "/spanaca2" element = {<Second_SP />} /> */}
          {/* <Route path = "/engmed1" element = {<Third_EN />} /> */}
             {/* <Route path = "/engmed1" element = {<S />} /> */}
{/*           <Route path = "/engaca1" element = {<New/>}/> */}
          <Route path = "/" element = {<Model/>}/>
          <Route path = "/engaca2" element = {<Engca/>}/>
          <Route path = "/engaca3" element = {<Engaca3 />}/>
          <Route path = "/engmed-tsf" element = {<Tsf/>} />

{/*           <Route path = "/spanish" element = {<Spain/>}/> */}
          {/* <Route path = "/spanmed1" element = {<Third_SP />} />
          <Route path = "/hbosolar" element = {<Forth_EN />} />
          <Route path = "/spanfe1" element = {<Forth_SP />} />
          <Route path = "/engerc1" element = {<Fifth_EN />} />
          <Route path = "/spandeb1" element = {<Fifth_SP />} />
          <Route path = "/engdeb1" element = {<Sixth_SP />} /> */}
          {/* <Route path = "/a" element = {<S />} /> */}

          <Route path = "/view" element = {<Visits />} />
          <Route path = "/*" element = {<NotFound />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

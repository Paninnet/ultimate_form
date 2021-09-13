import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './Components/header/Header';
import { Step1 } from './Components/step1/Step1';
import { Step2 } from './Components/step2/Step2';
import { Step3 } from './Components/step3/Step3';
import { Result } from './Components/result/Result';
import { DataState } from './Context/DataState';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <DataState>
            <Route exact path='/' component={Step1}></Route>
            <Route path='/step2' component={Step2}></Route>
            <Route path='/step3' component={Step3}></Route>
            <Route path='/result' component={Result}></Route>
          </DataState>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

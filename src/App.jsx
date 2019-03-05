import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/index.jsx';
class App extends Component{
render () {
  return(
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
}
export default App;
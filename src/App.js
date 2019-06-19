import React,{Component} from 'react';
import Navbar from './components/needed/navbar';
import News from './components/kaam/news';
import Trend from './components/kaam/trending';
import {BrowserRouter , Route} from 'react-router-dom';

class App extends Component {
  render(){
      return (
        <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Trend/>
      <News/> 
      </div>
      </BrowserRouter>
    );
  } 
}
export default App;

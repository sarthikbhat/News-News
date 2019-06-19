import React,{Component} from 'react';
import './trending.css'
import {Link} from 'react-router-dom';
class Trend extends Component {
  render(){
      return (
      <div className="trending">
          <div className="trend">
         <div className="titles">
             Trending Topics : 
      </div>
      <div className="topic">
      <Link><div className="topics">Entertainment</div></Link>
      <Link><div className="topics">Business</div></Link>
      <Link><div className="topics">Health</div></Link>
      <Link><div className="topics">Sports</div></Link>
      <Link><div className="topics">Technology</div></Link>
      <Link><div className="topics">Science</div></Link>
      <Link><div className="topics">General</div></Link>
      </div>
      </div>
      </div>
    );
  } 
}
export default Trend;
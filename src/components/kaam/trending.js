import React,{Component} from 'react';
import './trending.css'
import {Link} from 'react-router-dom';
class Trend extends Component {

  handleclick=(e)=>{
    var mytext = e.target.textContent;
    var text = mytext.toLowerCase();
    this.props.handledata(text);
    // console.log(text);
    }

  
  render(){
      return (
      <div className="trending">
          <div className="trend">
         <div className="titles">
             Trending Topics : 
      </div>
      <div className="topic">
      <Link><div className="topics" onClick={this.handleclick}>Entertainment</div></Link>
      <Link><div className="topics" onClick={this.handleclick}>Business</div></Link>
      <Link><div className="topics" onClick={this.handleclick}>Health</div></Link>
      <Link><div className="topics" onClick={this.handleclick}>Sports</div></Link>
      <Link><div className="topics" onClick={this.handleclick}>Technology</div></Link>
      <Link><div className="topics" onClick={this.handleclick}>Science</div></Link>
      <Link><div className="topics" onClick={this.handleclick}>General</div></Link>
      </div>
      </div>
      </div>
    );
  } 
}
export default Trend;
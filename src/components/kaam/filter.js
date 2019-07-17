import React , {Component} from 'react';
import './filter.css';

class Filters extends Component{
    state={
        country:[],
        topic:[]
    }

    change=(e)=>{
        this.setState({
            country:e.target.value
        })
    }

    change2=(e)=>{
        this.setState({
            topic:e.target.value
        })
    }

    click=()=>{
        var country = this.state.country;
        var topic = this.state.topic;
        console.log(country);  
        console.log(topic);
        
        this.props.handledata2(country,topic);
    }
    render(){
        return(
            <div>
                <a className="waves-effect waves-light btn modal-trigger btn butn" href="#modal1">Filter</a>
                <div id="modal1" className="modal bottom-sheet modu">
                <div className="modal-content">
                <ul class="collapsible popout">
                    <li>
                    <div className="collapsible-header heads">Country</div>
                    <div class="collapsible-body mern">
                        <p>
                            <label>
                            <input className="with-gap" value="au" type="radio" name="country" onChange={this.change}/>
                            <span >Australia</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="ar" name="country" type="radio" onChange={this.change}/>
                            <span>Argentina</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="br" name="country" type="radio" onChange={this.change}/>
                            <span>Brazil</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="ca" name="country" type="radio" onChange={this.change}/>
                            <span>Canada</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="ar" name="country" type="radio" onChange={this.change}/>
                            <span>Argentina</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="cn" name="country" type="radio" onChange={this.change}/>
                            <span>China</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="eg" name="country" type="radio" onChange={this.change}/>
                            <span>Egypt</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="fr" name="country" type="radio" onChange={this.change}/>
                            <span>France</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="de" name="country" type="radio" onChange={this.change}/>
                            <span>Germany</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="gr" name="country" type="radio" onChange={this.change}/>
                            <span>Greece</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="hk" name="country" type="radio" onChange={this.change}/>
                            <span>Hong Kong</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="in" name="country" type="radio" onChange={this.change}/>
                            <span>India</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="jp" name="country" type="radio" onChange={this.change}/>
                            <span>Japan</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="nz" name="country" type="radio" onChange={this.change}/>
                            <span>New Zealand</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="sa" name="country" type="radio" onChange={this.change}/>
                            <span>Saudi Arabia</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="za" name="country" type="radio" onChange={this.change}/>
                            <span>South Africa</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="uk" name="country" type="radio" onChange={this.change}/>
                            <span>United Kingdom</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="us" name="country" type="radio" onChange={this.change}/>
                            <span>United States</span>
                            </label>
                        </p>
                    </div>
                    </li>
                    <li>
                    <div className="collapsible-header heads">Topics</div>
                    <div className="collapsible-body mern">
                        <p>
                            <label>
                            <input className="with-gap" value="business" name="topic" type="radio" onChange={this.change2}/>
                            <span>Business</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="entertainment" name="topic" type="radio" onChange={this.change2}/>
                            <span>Entertainment</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="general" name="topic" type="radio" onChange={this.change2}/>
                            <span>General</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="health" name="topic" type="radio" onChange={this.change2}/>
                            <span>Health</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="science" name="topic" type="radio" onChange={this.change2}/>
                            <span>Science</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="sports" name="topic" type="radio" onChange={this.change2}/>
                            <span>Sports</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input className="with-gap" value="technology" name="topic" type="radio" onChange={this.change2}/>
                            <span>Technology</span>
                            </label>
                        </p>
                    </div>
                    </li>
                </ul>
                </div>
                <div className="modal-footer">
                    <a className="modal-close waves-effect waves-green btn btns" onClick={this.click}>Agree</a>
                </div>
                </div>
            </div>
        );
    }
}

export default Filters;
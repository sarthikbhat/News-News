import React , {Component} from 'react';
import './filter.css';

class Filters extends Component{
    state={
        country:[]
    }

    change=(e)=>{
        this.setState({
            country:e.target.name
        })
    }

    click=()=>{
        var country = this.state.country;
        console.log(country);  
        this.props.handledata2(country);
    }
    render(){
        return(
            <div>
                <a className="waves-effect waves-light btn modal-trigger btn" href="#modal1">Filter</a>
                <div id="modal1" className="modal bottom-sheet modu">
                <div className="modal-content">
                <ul class="collapsible popout">
                    <li>
                    <div className="collapsible-header">Country</div>
                    <div class="collapsible-body">
                    <p>
                        <label>
                        <input class="with-gap" name="au" type="radio" onChange={this.change}/>
                        <span>Australia</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input class="with-gap" name="ar" type="radio"/>
                        <span>Argentina</span>
                        </label>
                    </p>
                    </div>
                    </li>
                    <li>
                    <div className="collapsible-header">Second</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                    <div className="collapsible-header">Third</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
                </div>
                <div className="modal-footer">
                    <a className="modal-close waves-effect waves-green btn-flat" onClick={this.click}>Agree</a>
                </div>
                </div>
            </div>
        );
    }
}

export default Filters;
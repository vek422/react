import React,{Component} from "react";
import "./SearchBox.css"

class SearchBox extends Component{

    state={
        where:'',
        checkIn:'',
        checkOut:"",
        guests:'',

    }

    changeWhere = (e)=>{
        this.setState({where:e.target.value});
    }
    changecheckIn = (e)=>{
        this.setState({checkIn:e.target.value});
    }
    changecheckOut = (e)=>{
        this.setState({checkOut:e.target.value});
    }
    changeGuest = (e)=>{
        this.setState({guests:e.target.value});
    }

    render(){
        return(
           <div className="home-search-box col m4">
            <h1>Book Unique Places to stay and things to do.</h1>
            <form className="search-box-form">
                <div className="col m12 ">
                    <div className="form-label" >Where</div>
                    <div className="input-field" id="where">
                        <input className="browser-default" type={'text'} onChange={this.changeWhere} placeholder="Anywhere" value={this.state.where} />
                    </div>
                </div>
                <div className="col m6 ">
                    <div className="form-label" >Chek -in</div>
                    <div className="input-field" id="check-in">
                        <input className="browser-default" type={'date'} onChange={this.changecheckIn} placeholder="Anywhere" value={this.state.checkIn} />
                    </div>
                </div>
                <div className="col m6 ">
                    <div className="form-label" >Check-Out</div>
                    <div className="input-field" id="check-out">
                        <input className="browser-default" type={'date'} onChange={this.changecheckOut} placeholder="Anywhere" value={this.state.checkOut} />
                    </div>
                </div>
                <div className="col m12 ">
                    <div className="form-label" >Guests</div>
                    <div className="input-field" id="guest">
                        <select value={this.state.guests} onChange={this.changeGuest} className="browser-default" >
                            <option value={'1'}>1</option>
                            <option value={'2'}>2</option>
                            <option value={'3'}>3</option>
                            <option value={'4'}>4</option>
                            <option value={'5'}>5</option>
                        </select>
                    </div>
                </div>
                <div className="col m4 submit-btn ">
                    <div className="input-field" id="submit-btn">
                        <input type={'submit'} className="browser-default button" />

                    </div>
                </div>

            </form>

           </div>
        )
    }
}

export default SearchBox;
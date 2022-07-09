import React from "react";
import '../css/styles.css';


class Header extends React.Component {

    state={
        
        keywords:'hello',
    };
    
    inputchangehandler=(event)=>{
        
        this.setState({
            keywords:event.target.value,
            })
    }

    render(){
       
        return (
            <header>
                    <div className="logo" >logo</div>
                    <input type="text"
                    onChange={this.inputchangehandler}
                    />
            </header>)
    }
  
}
 
export default Header;
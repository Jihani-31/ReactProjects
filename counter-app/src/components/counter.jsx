import React, { Component } from 'react'
class Person extends Component {
    state={
        count:6,
        imageUrl:"https://picsum.photos/200"
    };

    style={
        fontSize:10,
        fontWeight:"bold"

    };
    
    render() { 
         return (
            <div>
                <img src={this.state.imageUrl} alt="" />
                <span style={this.style} className="badge badge-primary m-2">{this.formatCount()} </span>
                <button className="btn btn-danger btn-sm">Increment</button>
            </div>


         ) ;
    }
    formatCount(){
        const {count}=this.state;  //assign this.state to count
        return count === 0 ? <h1>Zero</h1> :<h1>{count}</h1>; //if count equal to  zero then return "zero",otherwise return count 
        
    }


}
 
export default Person;
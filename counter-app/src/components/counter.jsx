import React, { Component } from 'react'
class Person extends Component {
    state={
        count:1
    };
    
    render() { 
         return (
            <React.Fragment>
                <span>{this.formatCount()} </span>
                <button>Increment</button>
            </React.Fragment>


         ) ;
    }
    formatCount(){
        const {count}=this.state;  //assign this.state to count
        return count === 0 ? <h1>Zero</h1> :<h1>{count}</h1>; //if count equal to  zero then return "zero",otherwise return count 
        
    }


}
 
export default Person;
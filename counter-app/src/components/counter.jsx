import React, { Component } from 'react'
class Person extends Component {
    state={   //state object
        count:10,
        tags:['tag1','tag2','tag3'],
        imageUrl:"https://picsum.photos/200"
    };

    style={
        fontSize:10,
        fontWeight:"bold"

    };

    // constructor(){//bind method
    //     super()
    //     //console.log("constructor",this);//can access this
    //    this.handleIncrement= this.handleIncrement.bind(this);
    // }

    handleIncrement= (product) =>
    {
        //console.log('Incremet Clicked',this);//using "this" error happen, so use handleIncrement=()=>
        console.log(product);
        this.setState({
            count:this.state.count+1  // this.state.count++;
        })
    };
     
    doHandleIncrement=()=>{
        this.handleIncrement({
            id:1
        })
    };
    render() { 
      //  let classes = this.getBadgeClasses(); //used control+shift+r to extract the method
         return (
            <div>
                <img src={this.state.imageUrl} alt="" />
                <span style={this.style} className={this.getBadgeClasses()}>{this.formatCount()} </span>
                <button 
                onClick={()=>this.handleIncrement({id:1})} 
                className="btn btn-danger btn-sm">Increment</button>
                <ul>
                   {this.state.tags.map(tag=>
                   <li key={tag}>{tag}</li>)}
                </ul>
            </div>


         ) ;
    }
    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.state.count === 0 ? "badge-warning" : "badge-primary"; //if count is equal to 0 then button collor is yellow,otherwise button color is blue
        return classes;
    }

    formatCount(){
        const {count}=this.state;  //assign this.state to count
        return count === 0 ? <h1>Zero</h1> :<h1>{count}</h1>; //if count equal to  zero then return "zero",otherwise return count 
        
    }


}
 
export default Person;
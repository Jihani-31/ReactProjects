import React, { Component } from 'react'
class Counter extends Component {
  

    componentWillUnmount(){
      console.log("counter-unmount");
    }

    // state={   //state object
    //     value:this.props.value,
       
    //     imageUrl:"https://picsum.photos/200"
    // };

    style={
        fontSize:10,
        fontWeight:"bold"

    };

    // constructor(){//bind method
    //     super()
    //     //console.log("constructor",this);//can access this
    //    this.handleIncrement= this.handleIncrement.bind(this);
    // }

    // handleIncrement= (product) =>
    // {
    //     //console.log('Incremet Clicked',this);//using "this" error happen, so use handleIncrement=()=>
    //     console.log(product);
    //     this.setState({
    //         value:this.state.value+1  // this.state.count++;
    //     })
    // };

    // handleIncrement=()=>{
    //   this.setState({ value:this.state.value+1 });
       
    // };

     
    // doHandleIncrement=()=>{
    //     this.handleIncrement({
    //         id:1
    //     }) 
    // };
    render() {
      console.log("Counter-render");
       // console.log('props',this.props); 
      //  let classes = this.getBadgeClasses(); //used control+shift+r to extract the method
     
        return (
            <div>
               <h4> {this.props.id}</h4>
               
                <span style={this.style} className={this.getBadgeClasses()}>{this.formatCount()} </span>
                <button 
                  onClick={() => this.props.onIncrement(this.props.counter)} 
                  className="btn btn-danger btn-sm">Increment</button>
                <button
                  onClick={() => this.props.onDelete(this.props.counter.id)}
                  className="btn btn-danger btn-sm m-2">
                Delete
               </button>
               
               
            </div>


         ) ;
    }
    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary"; //if count is equal to 0 then button collor is yellow,otherwise button color is blue
        return classes;
    }

    formatCount(){
        const {value}=this.props.counter;  //assign this.state to count
        return value === 0 ? "Zero":value; //if count equal to  zero then return "zero",otherwise return count 
        
    }


}
 
export default Counter;
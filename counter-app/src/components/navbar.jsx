import React, { Component } from 'react'
  //stateless function component

  const Navbar = ({totalCounters})=>{
    console.log("Navbar-render");
    return ( 
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
            Navbar <span className="badge badge-pill badge-secondary">
                {totalCounters}</span>
            </a>
        </nav>
     );

  };
// const Navbar = () => {
//     return (  );
// }
 
// export default Navbar;

// class Navbar extends Component {
   
    
//     render() { 
        
//     }
// }
 
export default Navbar;
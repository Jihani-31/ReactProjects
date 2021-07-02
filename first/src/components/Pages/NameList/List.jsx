import React from 'react';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.css';
import './List.css';

function List(props){
    return(
        
        <li  className="list-group-item shadow-sm">
            <div className="row align-items-center">
                <div className="col-2">
                <img className="border border-dark rounded-circle shadow-sm" src={props.avatar} alt={props.name}/>
                </div>
                <div className="col-10">
                    <h4>{props.name}</h4>
                    <p>{props.city} | {props.email}</p>
                    <small>{moment(props.birth).format('DD-MM-YYYY')}</small>
                </div>
            </div>
            
            {/* <p className="redText"><img src={props.avatar} alt={props.name}/>{props.name}</p>
            <p>{props.email}</p>
            <p style={{colors:'green'}}>{props.city}</p>
            <p>{moment(props.birth).format('DD-MM-YYYY')}</p>
            <p>{props.Age}</p> */}
          
        </li>
    );        
}

export default List;

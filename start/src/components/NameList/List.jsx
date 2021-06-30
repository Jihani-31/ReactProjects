import React from 'react';
import moment from 'moment';

function List(props){
    return(
        <div>
            <p><img src={props.avatar} alt={props.name}/>{props.name}</p>
            <p>{props.email}</p>
            <p>{props.city}</p>
            <p>{moment(props.birth).format('DD-MM-YYYY')}</p>
            <p>{props.Age}</p>
          
        </div>
    );        
}

export default List;

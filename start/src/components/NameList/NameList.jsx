import React from 'react';
import List from './List';

function NameList(){
  var nameList=[
    {
    id:1,
    name: {
      title: 'mr',
      first:'brad',
      last: 'gibson' 
    },
    location:{
      city:'kilcoole'
    },
    email:'brad.gibson@example.com',
    dob:{
      date:' 1993-07-20T09:44:18.674Z',
      age: 26
    },
    picture: {
      medium: 'https://randomuser.me/api/portraits/med/men/75.jpg'
    }
    
    },
    {
      id:2,
      name: {
        title: 'mrs',
        first:'Karen',
        last: 'George' 
      },
      location:{
        city:'Drogheda'
      },
      email:'karen.george@example.com',
      dob:{
        date:'2009-06-16T21:14:16.706Z',
        age: 26
      },
      picture: {
        medium: 'https://randomuser.me/api/portraits/med/women/44.jpg'
      }
      
      },
      {
        id:3,
        name: {
          title: 'mr',
          first:'Ian',
          last: 'Robertson' 
        },
        location:{
          city:'Manchester'
        },
        email:'ian.robertson@example.com',
        dob:{
          date:'2001-06-16T21:14:16.706Z',
          age: 21
        },
        picture: {
          medium: 'https://randomuser.me/api/portraits/med/men/49.jpg'
        }
        
        }
  ];


  const NameListComponent=()=>{
    return (
      nameList.map(x=>{
        return (
          <List 
          key={x.id}
          name={`${x.name.title}.${x.name.first} ${x.name.last}`}
          city={x.location.city}
          email={x.email}
          birth={x.dob.date}
          Age={x.dob.age}
          avatar={x.picture.medium}

          />
        );
      })
    );
  };
    return(
        <React.Fragment>
        <h1>Name List</h1>
        <hr/>
        <ul>
          {NameListComponent()}
          
       
       
        </ul>
        </React.Fragment>
    );


}

export default NameList;

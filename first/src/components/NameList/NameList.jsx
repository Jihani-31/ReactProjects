import React, {useEffect, useState} from 'react';
import List from './List';

function NameList(){
  const[loadData,setLoadData]=useState(false);
  const [nameList,setNameList] = useState(
    [
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
    ]
  );

  useEffect(()=>{
    fetch("https://randomuser.me/api/").then((response)=>{
        return response.json();
      }).then(responseData=>{
         setNameList(nameList=>[...nameList,responseData.results[0]])
      });
  },[loadData]);



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

  const addUserHandler=()=>{
    setLoadData(new Date());
    // const newUser={
    //   id:new Date(),
    //   name: {
    //     title: 'miss',
    //     first:'Jihani',
    //     last: 'Nanayakkar' 
    //   },
    //   location:{
    //     city:'Matara'
    //   },
    //   email:'jihani.robertson@example.com',
    //   dob:{
    //     date:'1997-12-31T21:14:16.706Z',
    //     age: 21
    //   },
    //   picture: {
    //     medium: 'https://randomuser.me/api/portraits/med/women/15.jpg'
    //   }
    // };
    // setNameList((nameList)=>nameList.concat(newUser));

    //spread operator
    // setNameList((nameList)=>[...nameList,newUser]);
  }
    return(
        <React.Fragment>
        {/* <h1>Name List</h1>
        <hr/> */}
        <div className="container mt-4">
          <button className="btn btn-primary m-2" onClick={addUserHandler}>Add Name</button>
          <ul className="list-group">
            {NameListComponent()}
          </ul>
        </div>
        
        </React.Fragment>
    );


}

export default NameList;

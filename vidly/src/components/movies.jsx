import React, { Component } from 'react';
//imrc is a shortcut for 1st line
import {getMovies} from '../services/fakeMovieService';

import pagination from './common/pagination';
class Movies extends Component {
    state = { 
        movies:getMovies()
     };

     handleDelete=movie=>{
        const movies= this.state.movies.filter(m=> m._id !== movie._id);
        this.setState({
            movies 
        });

     };
    render() { 
        const{length:count}=this.state.movies;
        if(count === 0)
            return <p>There are no movies in the database</p>;
        return ( 
            <React.Fragment>
                <p>showing {count} movies.</p>  
                <table className="table"> 
                    <thead>
                        <tr>   
                            <th>Title</th>
                            <th>Genere</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.movies.map(movie=>(
                        <tr key={movie._id}>
                            <th>{movie.title}</th>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <button 
                                    className="button btn-danger btn-sm"
                                    onClick={()=> this.handleDelete(movie)}
                                >Delete
                                </button>
                            </td>    
                        </tr>
                    ))}
                        
                    </tbody>
                </table> 
                <pagination itemCount={this.state.movies.length} />

            </React.Fragment>
                  
        );

    }
}
 
export default Movies;


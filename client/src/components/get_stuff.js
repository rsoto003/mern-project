import React, { Component } from 'react';
import axios from 'axios';


class GetStuff extends Component {
    componentDidMount(){
        axios.get('/api/get-stuff').then( resp => {
            console.log('response from server', resp);
        });
        axios.post('/api/get-user').then( resp => {
            console.log('response from get user', resp);
        });
    }
        
    render(){
        return (
            <div>
                <h1>My name is ryan</h1>
                <h2>and i friends with will </h2>
            </div>
        )
    }
}

export default GetStuff;
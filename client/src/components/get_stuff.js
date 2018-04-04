import React, { Component } from 'react';
import axios from 'axios';


class GetStuff extends Component {
    componentDidMount(){
        axios.get('http://localhost:9000/api/get-stuff').then( resp => {
            console.log('response from server', resp);
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
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Image.css'
function Image(props) {
    return  <div>
        <Link to={'/id='+props.data.id}>
        <img src={props.data.url}></img>
        <div className='meme-name'>{props.data.name}</div>
        </Link>
    </div>
}

export default Image;
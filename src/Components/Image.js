import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Image.css'
function Image(props) {
    return  props.item==false?<div>
        
         <Link to={`/item?id=${props.data.id}`} state={props.data}>
        {/* <Link to={{pathname:'/item',search:`?id=${props.data.id}`,state:{message:'hello'}}} > */}
        <img src={props.data.url}></img>
        <div className='meme-name'>{props.data.name}</div>
        </Link>
    </div>:<div style={{width:'350px'}}><img style={{height:'350px',width:'100%'}} src={props.data.url}></img>
        <div className='meme-name'>{props.data.name}</div></div>

}
export default Image;
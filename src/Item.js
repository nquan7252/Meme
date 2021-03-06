import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import Custom from './Components/Custom';
import Image from './Components/Image';
import './Item.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Item(props) {
    let navigate=useNavigate();
    const location=useLocation();
    const url='https://api.imgflip.com/caption_image?'
    const submit=(e)=>{
        e.preventDefault();
        console.log('submited')
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        fetch(url+`template_id=${location.state.id}&username=nquan7252&password=nguyenquan00&boxes[0][text]=${e.target[0].value}&boxes[1][text]=${e.target[1].value}&boxes[2][text]=${e.target[2].value}&boxes[3][text]=${e.target[3].value}`)
        .then(data=>data.json()).then(json=>window.location.href=json.data.url)
    }
    return <div className='item-image-container'>
        <div>
        <Link to='/'>
     <img id='back-btn' src={require('./assets/back.png')}></img>
     </Link>
     </div>
     <div className='sub-container' style={{display:'flex'}}>
     <div id='image-container'><Image item={true} data={location.state}></Image></div>
     <Custom dataSubmission={submit}></Custom>
     </div>
    </div> 
}

export default Item;
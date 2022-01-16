import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import Custom from './Components/Custom';
import Image from './Components/Image';
import './Item.css'
import { useNavigate } from 'react-router-dom';
function Item(props) {
    let navigate=useNavigate();
    const location=useLocation();
    const url='https://api.imgflip.com/caption_image?'
    const submit=(e)=>{
        e.preventDefault();
        console.log('submited')
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        fetch(url+`template_id=${location.state.id}&username=nquan7252&password=nguyenquan00&text0=${e.target[0].value}&text1=${e.target[1].value}`)
        .then(data=>data.json()).then(json=>window.open(json.data.url))
    }
    return <div className='item-image-container'> {}
     <Image item={true} data={location.state}></Image>
     <Custom dataSubmission={submit}></Custom>
    </div> 
}

export default Item;
import React, { Component } from 'react';
import '../App.css'
import Image from './Image';
import { useState,useEffect } from 'react';
function Home() {
    const [data,setData]=useState(null);
    useEffect(()=>{
    const url='https://api.imgflip.com/get_memes'
    fetch(url).then(res=>res.json()).then(json=>setData(json));
  },[])
    return <div className="App">
    <header><h1>Meme Maker</h1>
    <h4>by Quan Nguyen</h4>
    </header>
    {data!=null&&<div className='image-container'>{data.data.memes.map((element,index)=> <Image key={index} data={element} item={false}></Image>)}</div>}
</div>;
}

export default Home;
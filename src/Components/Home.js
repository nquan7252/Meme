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
    <header>Mememe</header>
    {data!=null&&<div className='image-container'>{data.data.memes.map((element,index)=> <Image key={index} data={element}></Image>)}</div>}
</div>;
}

export default Home;
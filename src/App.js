import logo from './logo.svg';
import './App.css';
import Image from './Components/Image';
import { useEffect,useState } from 'react';

function App() {
  const [data,setData]=useState(null);
  useEffect(()=>{
    const url='https://api.imgflip.com/get_memes'
    fetch(url).then(res=>res.json()).then(json=>setData(json));
  },[])
  
  return (
    <div className="App">
      {data!=null&&<div className='image-container'>{data.data.memes.map((element,index)=> <Image key={index} data={element}></Image>)}</div>}
    </div>
  );
}

export default App;

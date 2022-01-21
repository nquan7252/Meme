import React, { Component } from 'react';
import './Custom.css'
function Custom(props) {
    
    return <div className='custom'>
        <form onSubmit={props.dataSubmission}>
        <input type='text' name='text1' placeholder='Text 1...'></input>
        <input type='text' name='text2'placeholder='Text 2...'></input>
        <input type='text' name='text3'placeholder='Text 3...'></input>
        <input type='text' name='text4'placeholder='Text 4...'></input>
        
        <input type='submit' id='create-btn' value='Create'/>
        </form>
    </div>;
}

export default Custom;
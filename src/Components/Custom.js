import React, { Component } from 'react';
import './Custom.css'
function Custom(props) {
    
    return <div className='custom'>
        <form onSubmit={props.dataSubmission}>
        <input type='text' name='text1'></input>
        <input type='text' name='text2'></input>
        <input type='text' name='text3'></input>
        <input type='text' name='text4'></input>

        <input type='submit' value='Create'/>
        </form>
    </div>;
}

export default Custom;
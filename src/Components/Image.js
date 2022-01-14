import React, { Component } from 'react';
function Image(props) {
    return <img src={props.data.url}></img>;
}

export default Image;
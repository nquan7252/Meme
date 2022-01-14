import React, { Component } from 'react';
import Image from './Components/Image';
function Item(props) {
    return <Image data={props.data}></Image>;
}

export default Item;
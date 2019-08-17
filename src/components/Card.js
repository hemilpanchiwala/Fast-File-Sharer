import React, {Component} from 'react';
// import Dropzone from 'react-dropzone';
import {FilePond} from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import './Card.css'
import 'tachyons'

class Card extends Component{
    onDrop = (files) => {
    console.log(files)
}

    render() {                                                                                                                                                                                                                                                                                                  
        return(
            <div className="ma3 ba w-50 center bg-blue">
                <FilePond className='w-40 center' allowMultiple = {true}/>
                <h3>SEND TO</h3>
                <input type='text' className = 'f4 pa2 w-40 center'/>
                <h3>FROM</h3>
                <input type='text' className = 'f4 pa2 w-40 center'/>
                <h3>MESSAGE</h3>
                <textarea type='text' className = 'f4 pa2 w-45 center'/>
                <div className="mt3 mb3">
                  <button type='submit' className='w-30 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib'>SEND</button>
                </div>
            </div>
        )
    }
}

export default Card;

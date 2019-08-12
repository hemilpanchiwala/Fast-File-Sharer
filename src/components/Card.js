import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import './Card.css'
import 'tachyons'

class Card extends Component{
    onDrop = (files) => {
    console.log(files)
}

    render() {
        return(
            <div className="ma3 ba w-50 center bg-blue">
                <Dropzone  onDrop={this.onDrop} className="tj center">
                    {({getRootProps, getInputProps}) => (
                        <div className='dropzone grow bg-red w-30 h4 mv2 center black db mw5 pa2 br2 ba b--black-10 shadow-1' {...getRootProps()}>
                            <input {...getInputProps()}/>
                            <div className='pa3'>
                              <h3>Drop files here!!!</h3>
                            </div>
                        </div>
                    )}
                </Dropzone>
                <h3>SEND TO</h3>
                <input type='text' className = 'f4 pa2 w-40 center'/>
                <h3>FROM</h3>
                <input type='text' className = 'f4 pa2 w-40 center'/>
                <h3>MESSAGE</h3>
                <textarea type='text' className = 'f4 pa2 w-40 center'/>
                <div className="mt3 mb3">
                  <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>SEND</button>
                </div>
            </div>
        )
    }
}

export default Card;

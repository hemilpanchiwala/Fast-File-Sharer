import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import 'filepond/dist/filepond.min.css';
import './Card.css'
import 'tachyons'

class Card extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            sendTo: '',
            message: '',
            selectedFile: null,
            loaded: 0
        }
    }
    

    onDrop = (files) => {
        this.setState({
            selectedFile: files[0]
        })
    }

    onClickHandler = () => {
        const data = new FormData();
        data.append('avatar', this.state.selectedFile)

        axios.post('http://localhost:5049/files', data, {
            onUploadProgress: ProgressEvent => {
                this.setState({
                    loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
                })
            }
        })
        .then(res => {
            console.log(res)
            console.log('File uploaded successfully')
        })
        .catch(err => console.log(err))
    }

    onToChange = (event) => {
        this.setState({
            sendTo: event.target.value
        })
    }

    onMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
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
                <input onChange={this.onToChange} type='text' className = 'f4 pa2 w-40 center'/>
                <h3>MESSAGE</h3>
                <textarea onChange={this.onMessageChange} type='text' className = 'f4 pa2 w-45 center'/>
                <div className="mt3 mb3">
                  <button onClick={this.onClickHandler} type='submit' className='w-30 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib'>SEND</button>
                </div>
            </div>
        )
    }
}

export default Card;

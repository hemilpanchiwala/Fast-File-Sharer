import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import './Card.css'
import 'tachyons'


class Card extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            sendTo: '',
            message: '',
            selectedFile: null,
            loaded: 0,
            toPlaceholder: 'email',
            sendToInput: '',
            sendToMessage: '',
            uploading: 'start',
            percentage: 0
        }
    }
    

    onDrop = (files) => {
        this.setState({
            selectedFile: files[0]
        })
    }

    onClickHandler = () => {

        this.setState({
            sendToInput: '',
            sendToMessage: '',
            uploading: 'uploading',
            selectedFile: null
        })

        const data = new FormData();
        data.set('to_person', this.state.sendTo)
        data.append('avatar', this.state.selectedFile)

        console.log(this.state.sendTo)

        axios.post('https://intense-spire-37729.herokuapp.com/files', data, {

            onUploadProgress: ProgressEvent => {
                let percentageUploaded = Math.round((ProgressEvent.loaded*100)/ProgressEvent.total)
                console.log("Progress: "+percentageUploaded)
                this.setState({
                    loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
                    percentage: percentageUploaded
                })
            }
        })
        .then(res => {
            console.log(res)
            alert('File uploaded successfully')
            this.setState({
                uploading: 'uploaded'
            })
        })
        .catch(err => console.log(err))
    }

    onToChange = (event) => {
        this.setState({
            sendTo: event.target.value,
            sendToInput: event.target.value
        })
    }

    onMessageChange = (event) => {
        this.setState({
            message: event.target.value,
            sendToMessage: event.target.value,
        })
    }

    render() {              

        return(
            <div className="ma2 ba w-40 center shadow-5">

               {
                    this.state.uploading === 'start'?
                    <div>
                        
                        <h1>Enter the file to upload</h1>
                    </div>:
                    <div>
                        {
                            this.state.uploading === 'uploading'?
                            <div>
                                <h1>Uploading ...</h1>
                                <Progress percent = {this.state.percentage} />
                            </div>:
                            <div>
                                <h1>Uploaded</h1>
                            </div>
                        }
                    </div>


               }

                <div className='ph3 pv3 bb b--light-silver'>
                    <Dropzone  onDrop={this.onDrop} className="tj center">
                        {({getRootProps, getInputProps}) => (
                            <div className='dropzone grow w-30 bb b--light-silver h4 mv2 center black db mw5 pa2 br2 ba b--black-10 shadow-1' {...getRootProps()}>
                                <input {...getInputProps()}/>
                                <div className='pa3'>
                                <h3>Drop files here!!!</h3>
                                </div>
                            </div>
                        )}
                    </Dropzone>
                </div>
                
                <div id = "sendto" className='tl ph3 pv3 bb b--light-silver'>
                    <h3>To:   </h3>
                    <input className = 'sendTo' placeholder='email' value={this.state.sendToInput} onChange={this.onToChange} type='text'/>
                </div>
                {/* <div id = "message" className='ph3 pv3 bb b--light-silver'>
                    <h3>Message: </h3>
                    <input placeholder='message' value={this.state.sendToMessage} onChange={this.onMessageChange} type='text' className = 'message f4 pa2 w-45 center'/>
                    
                </div> */}
                <div className="mt3 mb3">
                  <button onClick={this.onClickHandler} type='submit' className='w-30 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib'>SEND</button>
                </div>
            </div>
        )
    }
}

export default Card;

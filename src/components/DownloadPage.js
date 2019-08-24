import React, {Component} from 'react';


class DownloadPage extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
             list: [],
             item: {},
             hasReceived: false,
             to_person: this.props.currentUser
        }
    }
    
    onGetFilesRequest = () => {

        this.setState({
            list: []
        })

        fetch('https://intense-spire-37729.herokuapp.com/receivedfiles', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                to_person: this.state.to_person
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user[0] != null){
                user.map(item => (
                    this.state.list.push(item['filename'])
                    
                ))
                this.setState({
                    hasReceived: true
                })
            }
        })
        .catch(err => console.log(err))
        
    }

    help = (item) => {
        let path = 'https://intense-spire-37729.herokuapp.com/uploads/' + item['item']

        setTimeout(() => {
            const response = {
                file: path
            };

            console.log(response)

            window.open(response.file);

        }, 1000);
    }

    render(){
        return(
            <div>
                <input
                        onClick={this.onGetFilesRequest}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib"
                        type="submit"
                        value="Get Files" />
                {
                    this.state.hasReceived
                    ? <div>
                        <ul>
                            {
                                this.state.list.map(item => (
                                    <li onClick = {() => this.help({item})}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                    : <div>
                        <h1>NO FILES FOUND!!!</h1>
                    </div>
                }
            </div>
        )
    }
}

export default DownloadPage;


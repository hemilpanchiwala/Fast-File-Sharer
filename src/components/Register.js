import React, {Component} from 'react'

class Register extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            registerName: '',
            registerEmail: '',
            registerPassword: ''
        }
    }
    
    onNameChange = (event) => {
        this.setState({
            registerName: event.target.value
        })
    }

    onEmailChange = (event) => {
        this.setState({
            registerEmail: event.target.value
        })
    }

    onPasswordChange = (event) => {
        this.setState({
            registerPassword: event.target.value
        })
    }

    onsubmitRegister = () => {
        fetch('http://localhost:5049/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.registerName,
                email: this.state.registerEmail,
                password: this.state.registerPassword
            })
        })
        .then(response => response.json())
        this.props.onRouteChange('home')
    }

  render() {
    return(
        <article className="br2 ba dark-gray b--black-10 shadow-5 mv4 w-100 w-50-m w-25-l mw5 center bg-blue">
        <main className="pa4 black-80">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">REGISTER</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f5" htmlFor="name">NAME</label>
                        <input
                            className="pa2 input-reset ba hover-bg-black hover-white w-100"
                            type="text"
                            name="name"
                            id="name"
                            onChange={this.onNameChange} />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f5" htmlFor="email-address">EMAIL</label>
                        <input
                            className="pa2 input-reset ba hover-bg-black hover-white w-100"
                            type="email"
                            name="email-address"
                            id="email-address"
                            onChange={this.onEmailChange} />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f5" htmlFor="password">PASSWORD</label>
                        <input
                            className="b pa2 input-reset ba hover-bg-black hover-white w-100"
                            type="password"
                            name="password"
                            id="password"
                            onChange={this.onPasswordChange} />
                    </div>
                </fieldset>
                <div className="">
                    <input
                        onClick={this.onsubmitRegister}  
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib"
                        type="submit"
                        value="REGISTER" />
                </div>
        </main>
        </article>        
    )
  }
}

export default Register;

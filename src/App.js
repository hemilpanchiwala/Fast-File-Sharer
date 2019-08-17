import React, {Component} from 'react';
import './App.css';
import Card from './components/Card';
import SignIn from './components/SignIn'
import Register from './components/Register'
import Navigation from './components/Navigation'

class App extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       route: 'signin',
       isSignedIn: false
    }
  }

  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedIn: false})
    }else if(route === 'home'){
      this.setState({isSignedIn: true})
    }else{
      this.setState({isSignedIn: false})
    }
    this.setState({route: route})


  }
  
  render() {
    return (
      <div className="App">
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>

        {this.state.route === 'home'
          ? <div>
            <Card />
          </div>
          :
          (
            (this.state.route === 'signin' || this.state.route === 'signout')
            ? <SignIn onRouteChange={this.onRouteChange}/>
            : <Register onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    );
  }
}

export default App;

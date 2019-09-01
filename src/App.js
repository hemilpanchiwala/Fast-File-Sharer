import React, {Component} from 'react';
import './App.css';
import Card from './components/Card';
import SignIn from './components/SignIn'
import Register from './components/Register'
import Navigation from './components/Navigation'
import DownloadPage from './components/DownloadPage';

class App extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       route: 'signin',
       isSignedIn: false,
       currentUser: ''
    }
  }

  getCurrentUser = (user) => {

    this.setState({
      currentUser: user
    })
    

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
            <DownloadPage currentUser={this.state.currentUser}/>
          </div>
          :
          (
            (this.state.route === 'signin' || this.state.route === 'signout')
            ? <div>
            <SignIn onRouteChange={this.onRouteChange} getCurrentUser={this.getCurrentUser}/>
            </div>
            :<div> 
              <Register onRouteChange={this.onRouteChange}/>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;

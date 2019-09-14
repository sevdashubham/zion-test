import React from 'react';
import './App.css';
import Sidebar from "./containers/sidebar";
import Footer from "./containers/footer";
import PhotoGrid from "./containers/photogrid";
import userService from "./_services/user.service";

class App extends React.Component {

    state = {
        username: '',
        userProfile: {},
        imageList: []
    };

    fetchUserCollection = this.fetchUserCollection.bind(this);
    fetchUserProfile = this.fetchUserProfile.bind(this);

    fetchUserCollection(username) {
        userService.getUserCollection(username).then(response => {
            if (response) {
                console.log(response.data);
                this.setState({username: username, imageList: response.data});

            }
        }).catch(error => {
            console.log(error);
        })
    }

    fetchUserProfile(username) {
        userService.getUserProfie(username).then(responseProfile => {
            if (responseProfile.data) {
                console.log(responseProfile.data);
                this.setState({userProfile: responseProfile.data});
            }
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        const {imageList, userProfile} = this.state;
        return (
            <div className="App">
                <div>
                    <div className="side-bar">
                        <Sidebar fetchUserCollection={this.fetchUserCollection} fetchUserProfile={this.fetchUserProfile}/>
                    </div>
                    <div className="main">
                        <PhotoGrid imageList={imageList}/>
                    </div>
                </div>
                <Footer userProfile={userProfile}/>
            </div>
        );
    }
}

export default App;

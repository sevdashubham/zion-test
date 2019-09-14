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
        imageList: [],
        emptyStateImages: '',
        emptyStateProfile: ''
    };

    fetchUserCollection = this.fetchUserCollection.bind(this);
    fetchUserProfile = this.fetchUserProfile.bind(this);

    fetchUserCollection(username) {
        userService.getUserCollection(username).then(response => {
            if (response.data.length > 0) {
                console.log(response.data);
                this.setState({username: username, imageList: response.data, emptyStateImages: ''});
            } else {
                this.setState({emptyState:  `This user doesn't seem to have added any images`, imageList: []});
            }
        }).catch(error => {
            if (error.response.data) {
                this.setState({emptyStateImages: error.response.data ? error.response.data : 'Internal server error', imageList: []});
            }
        })
    }

    fetchUserProfile(username) {
        userService.getUserProfie(username).then(responseProfile => {
            if (responseProfile.data) {
                this.setState({userProfile: responseProfile.data, emptyStateProfile: ''});
            } else {
                this.setState({emptyStateProfile:  `This user doesn't seem to have a profile`, userProfile:{}});
            }
        }).catch(error => {
            if (error.response.data) {
                this.setState({emptyStateProfile: error.response.data ? error.response.data : 'Internal server error', userProfile: {}});
            }
        });
    }

    render() {
        const {imageList, userProfile, emptyStateImages, emptyStateProfile} = this.state;
        return (
            <div className="App">
                <div>
                    <div className="side-bar">
                        <Sidebar fetchUserCollection={this.fetchUserCollection} fetchUserProfile={this.fetchUserProfile} emptyStateImages={emptyStateImages}/>
                    </div>
                    <div className="main">
                        <PhotoGrid imageList={imageList} emptyStateImages={emptyStateImages}/>
                    </div>
                </div>
                <Footer userProfile={userProfile} emptyStateProfile={emptyStateProfile}/>
            </div>
        );
    }
}

export default App;

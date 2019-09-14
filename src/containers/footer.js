import React from "react";
import facebook from '../assets/iconmonstr-facebook-2-64.png';
import twitter from '../assets/iconmonstr-twitter-2-64.png';
import instagram from '../assets/iconmonstr-instagram-12-64.png';
import './footer.css';
import {Colors} from "../_helpers/colors";


class Footer extends React.Component {

    state = {
        text: 'Amazing Looks',
        step: 1,
        isRender: true
    };

    render() {
        const {userProfile, emptyStateProfile} = this.props;

        return (
            <div>
                {Object.keys(userProfile).length !== 0 && userProfile.constructor === Object &&
                    <div style={styles.footerContainer}>
                        <div>
                            {userProfile.profile_image.medium &&
                            <img style={styles.profile} src={userProfile.profile_image.medium}/>}
                        </div>
                        <div>
                            <h4>{userProfile.first_name ? userProfile.first_name : ''}</h4>
                        </div>

                        <div>
                            <ul style={{display: 'inline', paddingTop: 10}}>
                                {userProfile.instagram_username && <li style={{display: 'inline'}}>
                                    <a href={`https://instagram.com/${userProfile.instagram_username}/`}
                                       target={'_blank'}><img
                                        src={instagram} className="social-media-icons"/></a>
                                </li>}

                                {userProfile.twitter_username && <li style={{display: 'inline'}}>
                                    <a href={`https://www.twitter.com/${userProfile.twitter_username}`}
                                       target={'_blank'}><img
                                        src={twitter} className="social-media-icons"/></a>
                                </li>}
                            </ul>
                        </div>
                    </div>}
                {emptyStateProfile && <h4>{emptyStateProfile}</h4>}
            </div>
        );
    }

};

const styles = {
    footerContainer: {
        boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
        padding: '0px 30px',
        background: Colors.primary,
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        zIndex: 2,
        height: 50,
        width: '100%',
        position: 'fixed',
        bottom: 0
    },
    profile: {
        height: 40,
        width: 40,
        borderRadius: 20
    }
};

export default Footer;

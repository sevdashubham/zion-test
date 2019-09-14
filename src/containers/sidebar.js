import React from "react";
import SearchBar from "../components/searchbar";
import userService from '../_services/user.service';
import ListItemUser from "../components/listItemUser";
import {Colors} from "../_helpers/colors";


class Sidebar extends React.Component {

    state = {
        query: '',
        users: []
    };

    handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);
    handleClick = this.handleClick.bind(this);

    handleChange(e) {
        e.preventDefault();
        this.setState({query: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const {query} = this.state;
        userService.searchUsers(query, 1, 30).then(response => {
            if (response.data) {
                this.setState({users: response.data.results})
            }
            console.log(response)
        }).catch(error => {
            console.log(error);
        })
    }

    handleClick(username) {
        this.props.fetchUserProfile(username);
        this.props.fetchUserCollection(username);
    }

    render() {
        const {users, query} = this.state;

        return (
            <div style={{paddingBottom: 50}}>
                <div className="row no-gutters">
                    <div className="col-lg-8 col-md-9 col-sm-12 p-2 mt-5">
                        <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit}
                                   inputValue={query}/>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-12 p-2 mt-5">
                        <button onClick={this.handleSubmit} style={styles.buttonContainer}>
                            Search
                        </button>
                    </div>
                </div>
                <div className="generic_feature_list">
                    <ul>
                    {users.map((user) => {
                        return (
                                <li onClick={() => this.handleClick(user.username)} >
                                <ListItemUser key={user.id} name={user.name}/>
                                </li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        );
    }
}

const styles = {
    buttonContainer: {
        textAlign: 'center',
        width: '100%',
        height: '100%',
        border: '3px solid #86C232',
        background: Colors.primary,
        fontWeight: '500',
        color: Colors.accent
    }
};
export default Sidebar;

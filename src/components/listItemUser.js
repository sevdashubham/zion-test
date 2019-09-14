import React from 'react';
import './listItemUser.css';

const ListItemUser = ({name}) => {
    const fullName = name.split(' ');
    const lastName = fullName.pop();
    const firstName = fullName.join(' ');
    return (
        <div className="generic_feature_list">
            {firstName}<span>{lastName}</span>
        </div>
    )
};

export default ListItemUser

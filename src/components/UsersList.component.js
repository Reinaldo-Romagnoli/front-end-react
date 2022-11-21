import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../services/users-http.service';
import { UsersTableHtml } from './UsersTableHtml.component';

const UsersList = () => {
    const [rows, setRows] = useState([]);
    
    useEffect(() => {
        getAllUsers().then(res => setRows(res.data));
    }, []);

    return(
        <UsersTableHtml rows={rows} />
    );
}

export default UsersList;
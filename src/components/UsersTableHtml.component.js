import React from 'react';

export const UsersTableHtml = (props) => {
    return(
        <table style={{"borderWidth":"1px", 'borderColor':"#000",
        'borderStyle':'solid'}}>
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            {props.rows.map((row) => (
            <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>Ícones</td>
            </tr>
            ))}
        </tbody>
    </table>
    );
}
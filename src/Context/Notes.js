import React from 'react';

const NotesContext = React.createContext({
    notes: [],
    add: () => {},
    edit: () => {},
    delete: () => {}
})


export default NotesContext;
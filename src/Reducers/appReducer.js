function AppReducer(state , action) {
    console.log(state , action);
    switch (action.type) {
        case 'init_note':
            let { notes } = action.payload;
            return  {
                ...state,
                notes
            }
        case 'add_note':
            return addNote(state , action);
        case 'delete_note' :
            return deleteNote(state,action);
        case 'edit_note' :
            return editNote(state , action);
        case 'login_user' :
            return {
                ...state,
                authenticated : true
            }
        case 'logout_user' :
            return {
                ...state,
                authenticated : false
            }
        default:
            return state;
    }
}

export default AppReducer;


let addNote = (state , action) => {
    let { note } = action.payload;
    return {
        ...state,
        notes : [
            ...state.notes,
            note
        ]
    }
}

let deleteNote = (state , action ) => {
    let { key } = action.payload;

    return {
        ...state,
        notes : state.notes.filter(item => item.key !== key)
    }
}

let editNote = (state ,action) => {
    let { key , text} = action.payload;
    
    let item = state.notes.find(item => item.key === key);
    item.text = text ;

    let newnotes = state.notes.filter(item => item.key !== key)

    return {
        ...state,
        notes : [
            ...newnotes,
            item
        ]
    }
}

// addNote(text) {
//     this.setState(prevState => {
//         return {
//             notes : [
//                 ...prevState.notes,
//                 { key : Date.now() , done : false , text }
//             ]
//         }
//     })
// }


// deleteNote(key) {
//     this.setState(prevState => {
//         return {
//             notes : prevState.notes.filter(item => item.key !== key)
//         }
//     })
// }

// editNote(key , text) {
//     let { notes } = this.state;

//     let item = notes.find(item => item.key === key);
//     item.text = text ;

//     let newnotes = notes.filter(item => item.key !== key)

//     this.setState({
//         notes : [
//             ...newnotes,
//             item
//         ]
//     })
// }


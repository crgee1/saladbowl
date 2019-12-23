export default function reducer(state, action) {
    switch (action.type) {
        case 'show':
            return {user: 'pizza'}          
        default:
            return state;
    }
}
export const initialState = JSON.parse(window.localStorage.getItem("all-todos")) || {
    todos: [
        {
            id: 0,
            title: 'Prepare',
            completed: false,
            important: true
        },
        {
            id: 1,
            title: 'Redux',
            completed: true,
            important: false
        },
        {
            id: 2,
            title: 'Listout',
            completed: false,
            important: false
        },
    ]
}
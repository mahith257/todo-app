import { Box, makeStyles, Grid, Typography, Divider, List } from '@material-ui/core'
import { useSelector } from 'react-redux'
import SingleTodo from './SingleTodo'


const useStyles = makeStyles(() => ({
    root: {
        margin: 20,
        padding: 20,
        backgroundColor: "rgb(92.9%,92.9%,92.9%)"
    }
}))
export default function AllTodos() {
    const classes = useStyles()
    let { todos } = useSelector((state) => {
        return {
            todos: state.todos
        }
    })
    // console.log(todos)
    let importantTodos = []
    let nonImportantTodos = []
    todos.forEach(todo => {
        if(todo.important){
            importantTodos.splice(0,0,todo)
        }else{
            nonImportantTodos.push(todo)
        }
    })
    // console.log(importantTodos)
    // console.log(nonImportantTodos)
    return (
        <Box className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant='h6' align='center' gutterBottom>
                        My Todos
                    </Typography> 
                    <Divider />
                    <List>
                        {importantTodos && importantTodos.map(todo => (
                            !todo.completed && (<SingleTodo todo = {todo} key={todo.id} />)
                        ))}
                        {nonImportantTodos && nonImportantTodos.map(todo => (
                            !todo.completed && (<SingleTodo todo = {todo} key={todo.id} />)
                        ))}
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h6' align='center' gutterBottom>
                        Completed
                    </Typography> 
                    <Divider />
                    <List>
                        {importantTodos && importantTodos.map(todo => (
                            todo.completed && (<SingleTodo todo = {todo} key={todo.id} />)
                        ))}
                        {nonImportantTodos && nonImportantTodos.map(todo => (
                            todo.completed && (<SingleTodo todo = {todo} key={todo.id} />)
                        ))}
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
}

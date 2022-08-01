import { ListItem, FormGroup, FormControlLabel, Checkbox, Typography, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { TOGGLE_COMPLETED, DELETED_TODO, IMPORTANT_TODO } from '../redux/actions'
import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder';

export default function SingleTodo({ todo }) {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch({type: TOGGLE_COMPLETED, payload: todo.id})
    }
    const handleDelete = () => {
        dispatch({type: DELETED_TODO, payload: todo.id})
    }
    const handleImportant = () => {
        dispatch({type: IMPORTANT_TODO, payload: todo.id})
    }
    return (
        <ListItem dense>
            <FormGroup>
                <FormControlLabel control={<Checkbox checked={todo.completed} onChange = {handleChange} color = "primary" />} 
                label={
                    <Typography style={{textDecoration: todo.completed ? 'line-through': ''}}>
                        {todo.title}
                    </Typography>
                } />
            </FormGroup>
            <ListItemSecondaryAction>
                <IconButton edge='end' onClick={handleImportant} >
                    {todo.important && <StarIcon />}
                    {!todo.important && <StarBorderIcon />}
                </IconButton>
                <IconButton edge='end' onClick={handleDelete} >
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

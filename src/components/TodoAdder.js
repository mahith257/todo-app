import { TextField, Button } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_TODO } from '../redux/actions'

export default function TodoAdder() {

    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title !== ''){
            dispatch({type: ADD_TODO, payload: title})
            setTitle('')
        }
    }


    return (
        <div> 
            <form onSubmit={handleSubmit} >
                <TextField id="filled-basic" label="Add Todo" variant="filled" style ={{ marginRight: '10px', width: '70%'}} onChange={(e) => {setTitle(e.target.value)}} value = {title} />
                <Button variant="contained" style={{height: '55px', width: '20%'}} onClick = {handleSubmit} color = "primary">Add New Todo</Button>
            </form>
        </div>
    );
}

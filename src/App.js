import './App.css';
import Navbar from './components/Navbar';
import { makeStyles, Container, Paper } from '@material-ui/core'
import TodoAdder from './components/TodoAdder';
import AllTodos from './components/AllTodos';

const useStyles = makeStyles((theme) => ({
  appContainer: {
    paddingLeft: 100,
    paddingRight: 100,
    marginTop: "100px",
    width: '100%',
    textAlign: 'center'
  },
  wrapper: {
    width: "100%",
    textAlign: 'center'
  }
}))

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <Navbar />
      <Container className = {classes.appContainer}>
          <TodoAdder />
          <AllTodos />
      </Container>
    </div>
  );
}

export default App;

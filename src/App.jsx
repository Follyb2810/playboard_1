import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { Button } from 'react-bootstrap'
import { actions } from './store/store' 
import { CardPage, Login } from './component/pages'
function App() {
  const dispatch = useDispatch()
  const counter = useSelector((state)=>state.counter)
  const increment=()=>{
     dispatch(actions.increment())
  }
  const decrement=()=>{
    dispatch(actions.decrement())
  }
  const Addby10=()=>{
    dispatch(actions.Add10(10))
  }
  const isLogIn  = useSelector(state =>state.auth.isLogIn)
  console.log(isLogIn)
  // const increment=()=>{
  //    dispatch({type:'INC'})
  // }
  // const decrement=()=>{
  //   dispatch({type:'DEC'})
  // }
  // const Addby10=()=>{
  //   dispatch({type:'Addby10',payload:10})
  // }
  return (
    <>
      <h1>follt count</h1>
      <h3>{counter}</h3>
      <Button onClick={increment}>increment</Button>
      <Button onClick={decrement}>increment</Button>
      <Button onClick={Addby10}>increment by 10</Button>
      {!isLogIn && <Login/>}
      {isLogIn && <CardPage/>}
      


    </>
  )
}

export default App
 
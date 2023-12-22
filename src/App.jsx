import { useState } from "react";
import {v4 as uuid} from 'uuid'

import { Container, ToDoList, Input, Button, ListItem, Trash, Check } from './styles.js'

function App() {

  const [list, setList] = useState([])
  const [task, setTask] = useState('')

  function inputMudou(event){
    setTask(event.target.value)
  }

  function cliqueiNoBotao(){
    if(task){
      setList([ ...list, {id: uuid(), task, finished: false}])
  }
}

  function finalizarTarefa(id){
   const newList = list.map( item =>(
      item.id === id ? { ...item, finished: true} : item
   ))

   setList(newList)
   
  }

  function deletarTarefa(id){
    const newList = list.filter(item => item.id !== id)

    setList(newList)
  }


   return (
  
      <Container>
        <ToDoList>
      <Input onChange={inputMudou} type="text" name="" id="" placeholder="O que tenho para fazer..." />
      <Button onClick={cliqueiNoBotao}>Adicionar</Button>

      <ul>
        {
          list.length > 0 ? (
        list.map((item) => (
          <ListItem isFinished={item.finished} key={item.id}>
            <Check onClick={() => finalizarTarefa(item.id)} />
            <li >{item.task}</li>
            <Trash onClick={() => deletarTarefa(item.id)}/>
           </ListItem>
          ))
          ) : (
            <h3> NÃO HÁ TAREFA NA LISTA</h3>
          )
}
      </ul>
      </ ToDoList>
      </ Container> 
  )
}

export default App

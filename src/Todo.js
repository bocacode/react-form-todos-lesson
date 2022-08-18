import { useState } from 'react'

// this array will never re-render the component (not in state, nor coming from props)
const todoArray = [
  { id: 1, title: 'wash car', done: false },
  { id: 2, title: 'clean garage', done: false },
  { id: 3, title: 'buy milk', done: false },
]

const Todo = () => {
  const [todo, setTodo] = useState({})
  const [allTodos, setAllTodos] = useState([])

  console.log(allTodos)

  const handleAddTodo = () => {
    setAllTodos([...allTodos, todo])
  }

  const handleRemoveTodo = item => {
    console.log('remove item from todos', item)
    // remove item from alltodos array
    // filtering the array and removing the item
    const filteredArray = allTodos.filter(eachTodo => eachTodo.id !== item.id)

    // then setting the allTodos Array with the filtered array without item
    setAllTodos(filteredArray)
  }

  return (
    <>
      <h1> TODO APP</h1>
      <input
        type='text'
        name='todo'
        id='todo'
        onChange={e =>
          setTodo({
            id: allTodos.length + 1,
            title: e.target.value,
            done: false,
          })
        }
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {allTodos.map(singleTodo => {
          return (
            <li
              onClick={() => handleRemoveTodo(singleTodo)}
              key={singleTodo.id}
              style={{ listStyleType: 'none', textAlign: 'left' }}>
              {singleTodo.id}- {singleTodo.title}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Todo

import './App.css'
import FormsIntro from './FormsIntro'
import Todo from './Todo'

const App = () => {
  return (
    <>
      <div className="App">
        <div className="App-header">
          <Todo />
          {/* <FormsIntro />  */}
        </div>
      </div>
    </>
  )
}

export default App
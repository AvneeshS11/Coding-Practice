import './App.css'
function onClick(){
  console.log("This is Avneesh")
}
function onClick2(evt){
  console.log(evt)
  console.log("Heloo hh ji namste")
}
function onSubmit(evt){
  evt.preventDefault()
  console.log("Heloo hh ji namste")
}

function App() {

  return (
    <>
      <button onClick={onClick}>Click Me</button>
      <button onClick={onClick2}>Click Me2</button>

      <form action="">
        <input type="text" placeholder='Enter the text' />
        <button onClick={onSubmit}>Submit</button>
      </form>
    </>
  )
}

export default App

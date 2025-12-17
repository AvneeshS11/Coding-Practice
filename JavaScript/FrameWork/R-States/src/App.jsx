import Counter from "./Component/Counter"
import "./App.css"
import LikeButton from "./Component/LikeButton"
import Lodubox from "./Component/Lodubox"
import Todos from "./Component/Todos"
import Lotery from "./Component/Lotery"
import Ticket from "./Component/Ticket"
import Loteryy from "./Component/Loteryy"
import { sum } from "./Component/helper"
function App() {
  const winSum = (ticket)=>{
    return ticket.every((num)=> num === ticket[0])
  }
  return ( 
    <>
      <Loteryy size={3} winSum={winSum}/>
      {/* <Loteryy size={8} winSum={30}/> */}
    </>
  )
}

export default App

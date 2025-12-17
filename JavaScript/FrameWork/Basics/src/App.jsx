import Product from "./Component/Product"
import "./App.css"
import Msgbox from "./Component/Msgbox"
import AmzCard from "./Component/AmzCard"
function App() {
  let arr = ["Avneesh", "KLRahul", "MSDhoni", "Virat"]
  return (
    <>
      <h1>Blockbuster Deal on computer Accessories | Shop now</h1>
      <div className="Container">
        <AmzCard head="Logitech mx master" p1="8000 DPI" p2="5 programable buttun" pr1={8000} pr2={5000} />
        <AmzCard head="Logitech mx master" p1="8000 DPI" p2="5 programable buttun" pr1={8000} pr2={5000} />
        <AmzCard head="Logitech mx master" p1="8000 DPI" p2="5 programable buttun" pr1={8000} pr2={5000} />
      </div>

      {/* <Msgbox name = "Avneesh" clr = "blue" />
      <Msgbox name = "Kashish" clr = "pink" />
      <Msgbox name = "Aryan" clr = "grey" />
      <Msgbox name = "Arpit" clr = "brown" /> */}
      {/* <Product name = "Avneesh" course = "BCA third year" lists = {arr} color = "red"/>
      <Product name = "Avneesh" course = "BCA third year" />
      <Product name = "Avneesh" course = "BCA third year" />
      <Product name = "Avneesh" course = "BCA third year" />
      <Product name = "Avneesh" course = "BCA third year" /> */}
    </>
  )
}

export default App

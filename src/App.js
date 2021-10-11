import Mycomponent from "./components/MyComponent";
import Food from "./components/Food"
import Wrapper from "./components/Wrapper"
import useState from 'react'
import './styles.scss'

const food = ['pizza', 'Hamburger', 'coke']
const App = () => {
  const [inputFromChild, setInputFromChild] = useState('')
  const [isClicked, setIsClicked] = useState(false)
  
  const handleClick = () => {
    console.log("clicked")
    console.log(inputFromChild)
    setIsClicked(true)
  }

  
  return(
  <div className="flex">
    <Wrapper>
    <Mycomponent  title="it Works" />
    <Food  food={food}/>
    <Alert setInputFromChild={setInputFromChild}
    inputFromChild={inputFromChild}
    handleClick ={handleClick}
     />
     {isClicked ? <p>{inputFromChild}</p> : null}
    
    </Wrapper>
    
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  );
  export default App;

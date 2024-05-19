import './App.css';
import LearningComponent from "./components/learning-examples/LearningComponents";
import Counter from "./components/counter/Counter";


function App() {
  return (
    <div className="App">
        {/*<LearningComponent></LearningComponent>*/}
        <Counter />
    </div>
  );
}


// function PlayingWithProps(properties){
//     console.log(properties)
//     console.log(properties.property1)
//     console.log(properties.property2)
//
//     return (<div>props</div>)
// }
function PlayingWithProps({property1, property2}){
    console.log(property1)
    console.log(property2)

    return (<div>props</div>)
}






export default App;

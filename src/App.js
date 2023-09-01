import './App.css';

const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h2>age: {props.age}</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
        <Person name={"Jay"} lastName={"Dub"} age={"34"}/>
        <Person name={"Sarah"} lastName={"Miller"} age={"34"}/>
        <Person name={"Ryu"} lastName={"Hazuka"} age={"37"}/>
        <Person name={"Jidion"} lastName={"Richards"} age={"23"}/>
        <Person name={"KSI"} lastName={"Tunde"} age={"14"}/>
        <Person name={"Logan"} lastName={"Paul"} age={"4"}/>
    </div>
  );
}

export default App;

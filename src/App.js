
import './App.css';

function App() {
  //const name=<h1>Gaurav</h1>;
  //const age=<h2>20</h2>;

  return (
    <div className="App">
      <User name="gaurav" age={20} email="xyz123@123"/>
      <User/>
      
      <Job salary={1000} position="manager" company="abc"/><br/> <br/> <br/>
      <Job/>
    </div>
  );
}
const User=(props)=>{
  return(
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
      <h4>{props.gender}</h4>
    </div>
  );
}
const Job=(props)=>{
  return(
    <div>
      {props.salary}<br/>
      {props.position}<br/>
      {props.company}<br/>
    </div>
  );
}
Job.defaultProps={
  salary:"0000",
  position:"yetToDecide",
  company:"unDecided"
};
User.defaultProps={
  name:"name",
  age:"56",
  email:"hello@123",
  gender:"male"
};

export default App;

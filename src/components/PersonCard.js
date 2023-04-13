import React, {useState} from 'react'

const PersonCard = (props) => {
  const {firstName, lastName, initalAge, hairColor} = props;
  const [age, setAge]=useState(initalAge);
return (
  <div className="App">
    <h1>{lastName}, {firstName}</h1>
    <p>Age: {age}</p>
    <p>Hair Color: {hairColor}</p>
    <button onClick={(event)=>setAge(age + 1)} className="BDayButton">Birthday Button for {firstName} {lastName}</button>
  </div>
)
}

export default PersonCard
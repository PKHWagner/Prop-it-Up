import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div>
      <PersonCard 
        firstName = {"Nobara"}
        lastName = {"Kugasaki"}
        initalAge = {16}
        hairColor = {"Red"}
      />
      <PersonCard 
        firstName = {"Satoru"}
        lastName = {"Gojo"}
        initalAge = {28}
        hairColor = {"White"}
      />
      <PersonCard 
        firstName = {"Yuta"}
        lastName = {"Okkotsu"}
        initalAge = {17}
        hairColor = {"Black"}
      />
      <PersonCard 
        firstName = {"Mai"}
        lastName = {"Zenin"}
        initalAge = {17}
        hairColor = {"Black"}
      />
    </div>
  );
}

export default App;

import whirlpool from './images/whirlpool.png';
import './App.css';

const imageDimensions = {
  width: '360px',
  height: 'auto'
}

const card = {
  minheight: '250px',
  width: '400px',
  backgroundColor: '#eee',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start', 
  justifyContent: 'flex-start',
  padding: '20px',
  boxSizing: 'border-box'

}

const name ={
  marginBottom: '1rem'
}

const description = {
  marginTop: '0'
}

function App() {
  return (
    <div style= {card}>
      <img src={whirlpool} style={imageDimensions} alt='Shawnee Cave System'/>
      <h1 style={name} >Monica Galvez</h1>
      <p style={description}>I was born in 1995 in Chicago, IL. My parents were owners of a humble Mexican grocery store in the city. When I was 5, my family and I moved to Northwest Indiana to escape the fast paced city life. My family has since moved back to the suburbs of Chicago, while I decided to move to Southern Indiana. I love living so close to a national forest and wilderness area. My current favorite hobbies are backpacking and caving. I'm a bit of an adrenaline junkie and always up for adventure. </p>
    </div>
  );
}

export default App;

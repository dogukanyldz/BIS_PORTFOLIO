import logo from './logo.svg';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


export default function App() {
  var navigator = useNavigate();


  const redirect= async() =>{
    navigator('/create');
  }
  
  return (
    <div className="App" style={{backgrondcolour:'red'}}>
      <header className="App-header">
        <h4 style={{color:'black'}}>
          Portföy Bulunmamaktadır!
        </h4>
        <Button onClick={redirect} variant="contained">Portföyü Oluştur</Button>
      </header>
    </div>
  );
}

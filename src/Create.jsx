import React, { Component } from "react";
import users from "./user";
import diplomas from "./diploma";
import './style.css';
import { useNavigate } from "react-router-dom";




export default function Create() {
  var navigate = useNavigate();
  const [grupAdi, setgrupAdi] = React.useState("");
  const [proje, setProje] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [user, setUser] = React.useState("");
  const [diploma, setDiploma] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);
  const [acceptedTerms2, setAcceptedTerms2] = React.useState(false);
  const [showDiv, setShowDiv] = React.useState(true);

  const redirect = async () =>{
    navigate("/form");
  }

  const handleSubmit = (event) => {
    console.log(`
      Password: ${password}
      Country: ${user}
      Accepted Terms: ${acceptedTerms}
    `);
    
    event.preventDefault();
  }
  const handleRadioButton = (event) => {

    setShowDiv(!event.checked);

    setAcceptedTerms(event.checked)
  }
  const handleRadioButton2 = (event) => {
    setShowDiv(true);
    setAcceptedTerms2(event.checked)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Portföyünüzü Oluşturun</h2>
    
      <label>
        <input
          name="munferit"
          type="checkbox"
          checked={acceptedTerms}
          onChange={e => handleRadioButton(e.target)}
          required />
        Münferit        
      </label>
      
      <label>
        <input
          name="diploma"
          type="checkbox"
          checked={acceptedTerms2}
          onChange={e => handleRadioButton2(e.target)}
          required />
        Diploma        
      </label>

      <label>
      Diploma / Eğitim Adı
        <select
          name="diploma"
          value={diploma}
          onChange={e => setDiploma(e.target.value)}
          required>
          <option key=""></option>
          {diplomas.map(dp => (
            <option key={dp}>{dp}</option>
          ))}
        </select>
      </label>
      
      <div style={showDiv ? {} : { display: 'none' }}>
      <label>
        Grup Adı:
        <input
          name="email"
          type="email"
          value={grupAdi}
          onChange={e => setgrupAdi(e.target.value)}
          required />
      </label>

      <label>
        Proje Konusu Adı:
        <input
          name="email"
          type="email"
          value={proje}
          onChange={e => setProje(e.target.value)}
          required />
      </label>

      <label>
        Portföy Yöneticisi:
        <select
          name="country"
          value={user}
          onChange={e => setUser(e.target.value)}
          required>
          <option key=""></option>
          {users.map(user => (
            <option key={user}>{user}</option>
          ))}
        </select>
      </label>

      </div>
    
      <button onClick={redirect}>Sonraki Adım</button>
    </form>
  );
}


import "./MyForm.css";

import {useState} from 'react';

const MyForm = ({ user }) => {

    {/*6 - controlled de input */}
  // gerenciamento de dados

  const [name, setName] = useState(user ? user.name : "")
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState("");


  const handleName = (e) => {
   //console.log("mundou o nome");
   //console.log(e.target.value);
   setName(e.target.value);
  }

  //console.log(name);
  //console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulario")
    console.log(name, email, bio);

    //validacao
    //envio


    // 7 - Limpar os forms
    setName("");
    setEmail("");
  };
  
  return (
    <div>
      {/* 1 - Criação de form */}

      <form>
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" placeholder="Digite o seu nome" />
        </div>
        {/* 2 - Label envolvendo o input */}
        <label>
          <span>E-mail:</span>
          <input type="email" name="email" placeholder="Digite o seu e-mail" />
        </label>
         {/*8 - textarea*/}
     <label>
     <span>Bio:</span>
     <textarea name="bio" placeholder='Descrição do Usuário' onChange={(e => setBio(e.target.value))} value={bio}></textarea>
     </label>
        <input type="submit" value="Enviar" />

      </form>
    </div>
  );
};

export default MyForm;

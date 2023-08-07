import { useState } from "react"
import Input from "./components/input"


function App() {
  const [password, setPassword] = useState('Password')
  const [copyText, setCopyText] = useState('Copiar')
  const [passwordSize, setPasswordSize] = useState(8)

  
  function generate(){
    const characters = "1234567890!@#$%&qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM"
    let newPassword = ''

    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)

      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopyText('Copiar')
  }

  function copyToClipboard(){
    window.navigator.clipboard.writeText(password)
    setCopyText('Copiado!')
  }

  return (
    <>
    <div className="app">
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="passwordSize">Tamanho:</label>
        <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize}/>
      </div>
      <button onClick={generate}>Gerar senha com {passwordSize} caracteres!</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <p>{password}</p>
    </div>
    </>
  )
}

export default App

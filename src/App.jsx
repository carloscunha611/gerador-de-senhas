import { useState } from "react"


function App() {
  const [password, setPassword] = useState('Password')
  const [copyText, setCopyText] = useState('Copiar')

  function generate(){
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = 8
    let newPassword = ''

    for (let i = 0; i < length; i++) {
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
      <button onClick={generate}>Gerar!</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <p>{password}</p>
    </div>
    </>
  )
}

export default App

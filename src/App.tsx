import { useState } from 'react'
import './App.css'

interface Cliente {
  id: number
  nombre: string
  email: string
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')

  // 👇 TUS CREDENCIALES PERSONALES
  const credencialesValidas = {
    usuario: 'berzosaneuro',
    password: 'berzosa15031980'
  }

  const handleLogin = () => {
    if (usuario === credencialesValidas.usuario && password === credencialesValidas.password) {
      setIsLoggedIn(true)
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsuario('')
    setPassword('')
  }

  const agregarCliente = () => {
    if (nombre && email) {
      const nuevoCliente: Cliente = {
        id: Date.now(),
        nombre,
        email
      }
      setClientes([...clientes, nuevoCliente])
      setNombre('')
      setEmail('')
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="cyberpunk-app login-screen">
        <header className="cyber-header">
          <div className="logo-cyber">
            <span className="logo-text">CYBER</span>
            <span className="logo-text-secondary">CRM</span>
          </div>
        </header>

        <main className="login-content">
          <div className="login-card">
            <div className="login-glow"></div>
            <h1 className="login-title">ACCESO RESTRINGIDO</h1>
            
            <div className="cyber-input">
              <input
                type="text"
                placeholder="USUARIO"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
              <div className="input-glow"></div>
            </div>

            <div className="cyber-inp

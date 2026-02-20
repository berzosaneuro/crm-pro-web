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

            <div className="cyber-input">
              <input
                type="password"
                placeholder="CONTRASEÑA"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
              <div className="input-glow"></div>
            </div>

            <button 
              className="cyber-button login-button"
              onClick={handleLogin}
            >
              ENTRAR SISTEMA
            </button>

            <div className="credentials-hint">
              👉 berzosaneuro / berzosa15031980
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="cyberpunk-app">
      <header className="cyber-header">
        <div className="logo-cyber">
          <span className="logo-text">CYBER</span>
          <span className="logo-text-secondary">CRM</span>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          SALIR
        </button>
      </header>

      <main className="cyber-content">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">{clientes.length}</div>
            <div className="stat-label">CLIENTES</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">●</div>
            <div className="stat-label">ONLINE</div>
          </div>
        </div>

        <div className="clientes-section">
          <h2 className="section-title">CLIENTES CONECTADOS</h2>
          {clientes.length === 0 ? (
            <div className="empty-state">
              <div className="empty-glow">NO_DATA</div>
              <p>AGREGAR PRIMER CLIENTE</p>
            </div>
          ) : (
            <div className="clientes-list">
              {clientes.map((cliente) => (
                <div key={cliente.id} className="client-card">
                  <div className="client-avatar"></div>
                  <div className="client-info">
                    <div className="client-name">{cliente.nombre}</div>
                    <div className="client-email">{cliente.email}</div>
                  </div>
                  <div className="client-status active"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <div className="input-section">
        <div className="cyber-input">
          <input
            type="text"
            placeholder="NOMBRE"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <div className="input-glow"></div>
        </div>
        <div className="cyber-input">
          <input
            type="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="input-glow"></div>
        </div>
        <button
          className="cyber-button"
          onClick={agregarCliente}
          disabled={!nombre || !email}
        >
          AGREGAR CLIENTE
        </button>
      </div>
    </div>
  )
}

export default App

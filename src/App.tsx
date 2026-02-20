import { useState } from 'react'
import './App.css'

interface Cliente {
  id: number
  nombre: string
  email: string
}

function App() {
  const [clientes, setClientes] = useState<Cliente[]>([])

  const agregarCliente = (nombre: string, email: string) => {
    const nuevoCliente: Cliente = {
      id: Date.now(),
      nombre,
      email
    }
    setClientes([...clientes, nuevoCliente])
  }

  return (
    <div className="App">
      <h1>🚀 CRM PRO</h1>
      
      <div className="clientes-lista">
        <h2>Clientes ({clientes.length})</h2>
        {clientes.length === 0 ? (
          <p>👆 Agrega tu primer cliente</p>
        ) : (
          <ul>
            {clientes.map(cliente => (
              <li key={cliente.id}>
                📧 {cliente.nombre} - {cliente.email}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="formulario">
        <input type="text" placeholder="Nombre cliente" id="nombre" />
        <input type="email" placeholder="Email cliente" id="email" />
        <button onClick={() => {
          const nombre = (document.getElementById('nombre') as HTMLInputElement).value
          const email = (document.getElementById('email') as HTMLInputElement).value
          if (nombre && email) {
            agregarCliente(nombre, email)
            ;(document.getElementById('nombre') as HTMLInputElement).value = ''
            ;(document.getElementById('email') as HTMLInputElement).value = ''
          }
        }}>
          ➕ Agregar Cliente
        </button>
      </div>
    </div>
  )
}

export default App

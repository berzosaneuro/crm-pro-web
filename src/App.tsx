import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const COLORES = {
  whatsapp: '#25D366',
  pendiente: '#FFCA28',
  cita: '#2196F3',
  cerrado: '#4CAF50',
  eliminar: '#FF4444'
};

type Cliente = {
  id: string;
  nombre: string;
  telefono: string;
  estado: string;
  fechaProxima: string;
};

function Home() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  
  useEffect(() => {
    const data = localStorage.getItem('crm_clientes');
    if (data) setClientes(JSON.parse(data));
  }, []);

  const abrirWhatsApp = (telefono: string) => {
    window.open(`https://wa.me/${telefono.replace('+34', '34')}`, '_blank');
  };

  const eliminarCliente = (id: string) => {
    if (confirm('¿Eliminar?')) {
      const nuevos = clientes.filter(c => c.id !== id);
      localStorage.setItem('crm_clientes', JSON.stringify(nuevos));
      setClientes(nuevos);
    }
  };

  return (
    <div style={{padding:20, maxWidth:600, margin:'0 auto'}}>
      <h1 style={{background:COLORES.whatsapp, color:'white', padding:20, textAlign:'center', borderRadius:10}}>
        CRM PRO
      </h1>
      
      {clientes.map(cliente => (
        <div key={cliente.id} style={{border:'1px solid #ddd', padding:15, margin:10, borderRadius:10}}>
          <div style={{display:'flex', gap:10}}>
            <button onClick={() => abrirWhatsApp(cliente.telefono)} 
                    style={{background:COLORES.whatsapp, color:'white', border:'none', borderRadius:20, padding:'10px 15px'}}>
              💬 WhatsApp
            </button>
            <button onClick={() => eliminarCliente(cliente.id)}
                    style={{background:COLORES.eliminar, color:'white', border:'none', borderRadius:20, padding:'10px 15px'}}>
              🗑️
            </button>
          </div>
          <h3>{cliente.nombre}</h3>
          <p>📱 {cliente.telefono}</p>
          <p>📅 {new Date(cliente.fechaProxima).toLocaleDateString('es-ES')}</p>
          <span style={{padding:'5px 10px', background:COLORES[cliente.estado], color:'white', borderRadius:15, fontSize:12}}>
            {cliente.estado}
          </span>
        </div>
      ))}
      
      <Link to="/nuevo" style={{
        position:'fixed', bottom:30, right:30, background:COLORES.whatsapp, 
        color:'white', width:60, height:60, borderRadius:'50%', fontSize:30, 
        display:'flex', alignItems:'center', justifyContent:'center', textDecoration:'none',
        boxShadow:'0 4px 12px rgba(37,211,102,0.4)'
      }}>+</Link>
    </div>
  );
}

function NuevoCliente() {
  const [form, setForm] = useState({nombre:'', telefono:'+34', estado:'pendiente'});

  const guardar = () => {
    if (!form.nombre || !form.telefono.startsWith('+34')) {
      return alert('❌ Nombre y teléfono (+34) obligatorios');
    }
    
    const nuevo: Cliente = {
      id: Date.now().toString(),
      nombre: form.nombre,
      telefono: form.telefono,
      estado: form.estado,
      fechaProxima: new Date(Date.now() + 24*60*60*1000).toISOString()
    };
    
    const clientes = JSON.parse(localStorage.getItem('crm_clientes') || '[]');
    clientes.unshift(nuevo);
    localStorage.setItem('crm_clientes', JSON.stringify(clientes));
    
    alert('✅ Cliente guardado!');
    window.location.href = '/';
  };

  return (
    <div style={{padding:20, maxWidth:500, margin:'0 auto'}}>
      <h1 style={{background:COLORES.whatsapp, color:'white', padding:20, textAlign:'center'}}>
        Nuevo Cliente
      </h1>
      
      <input 
        placeholder="Nombre *" 
        value={form.nombre} 
        onChange={e=>setForm({...form, nombre:e.target.value})}
        style={{display:'block', width:'100%', padding:15, margin:10, borderRadius:8, border:'1px solid #ddd'}}
      />
      
      <input 
        placeholder="Teléfono (+34 612 345 678)" 
        value={form.telefono} 
        onChange={e=>setForm({...form, telefono:e.target.value})}
        style={{display:'block', width:'100%', padding:15, margin:10, borderRadius:8, border:'1px solid #ddd'}}
      />
      
      <select value={form.estado} onChange={e=>setForm({...form, estado:e.target.value})}
              style={{display:'block', width:'100%', padding:15, margin:10, borderRadius:8, border:'1px solid #ddd'}}>
        <option value="pendiente">⏳ Pendiente</option>
        <option value="cita">📅 Cita</option>
        <option value="interesado">❤️ Interesado</option>
        <option value="cerrado">✅ Cerrado</option>
      </select>
      
      <button onClick={guardar} 
              style={{width:'100%', padding:'18px', background:COLORES.whatsapp, color:'white', 
                     border:'none', borderRadius:12, fontSize:18, fontWeight:'bold', margin:5}}>
        🚀 GUARDAR
      </button>
      <button onClick={()=>window.location.href='/'} 
              style={{width:'100%', padding:'18px', background:'#ccc', border:'none', borderRadius:12, margin:5}}>
        Cancelar
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevo" element={<NuevoCliente />} />
      </Routes>
    </Router>
  );
}

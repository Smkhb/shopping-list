import './App.css'
import { FaCheckCircle, FaCircle, FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from 'react';

function App() {

  const [items, setItems] = useState([
    { nome: 'Arroz', quantidade: 2, selecionado: false },
    { nome: 'Alcatra', quantidade: 3, selecionado: false },
    { nome: 'Suco de Laranja', quantidade: 5, selecionado: false },
  ])

  const listaDeItems = items.map(item =>
    
    // Item
    <div className='flex items-center justify-between border-b-2 border-dashed'>
      
      {/* CheckBox e Nome */}
      <div className='flex py-2  gap-2 items-center'>
        {item.selecionado ? (
          <>
            <FaCheckCircle />
            <span>{item.nome}</span>
          </>
        ) : (
          <>
            <FaCircle />
            <span>{item.nome}</span>
          </>
        )}
      </div>

      {/* Setas e Quantidade */}
      <div className='bg-slate-200 text-cyan-700 rounded-2xl flex items-center gap-1 '>
        <button>
          <FaChevronLeft />
        </button>
        <span>{item.quantidade}</span>
        <button>
          <FaChevronRight />
        </button>
      </div>
    </div>
  )

  return (
    <main className="bg-gradient-to-r from-moonlitAsteroid-100 via-moonlitAsteroid-200 to-moonlitAsteroid-300 text-slate-200 text-xl">
      <section className='min-h-screen flex justify-center items-center'>

        {/* Div Principal */}
        <div className=' bg-cyan-700 py-8 px-4 rounded-md shadow-xl'>

          {/* Campo de Texto:Adicionar Item */}
          <div className='flex bg-gradient-to-r from-sky-300 to-blue-300 rounded-md py-2 px-4 mb-4'>
            <input className=' placeholder:text-slate-200 placeholder:font-bold bg-transparent  outline-none' placeholder='Adicionar Item. . .' />
            <FaPlus className=' self-center' />
          </div>

          {/* Lista de Itens */}
          <div>
            {listaDeItems}
          </div>

          {/* Total */}
          <div className='text-end pt-2'>Total: 6</div>
        </div>

      </section>
    </main>
  )
}

export default App

import './App.css'
import { FaCheckCircle, FaCircle, FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from 'react';

function App() {

  const [items, setItems] = useState([
    { nome: 'Suco de Laranja', quantidade: 2, selecionado: false },
  ])
  const [inputValue, setInputValue] = useState('')
  const [contagemTotalDeItems, setContagemTotalDeItems] = useState(2)
  const listaDeItems = items.map((item,index) =>
    <div className='flex items-center justify-between border-b-2 border-dashed' key={index}>
      
      {/* CheckBox e Nome */}
      <div className='flex py-2  gap-2 items-center' onClick={()=> itemSelecionado(index)}>
        {item.selecionado ? (
          <>
            <FaCheckCircle />
            <span className=' line-through'>{item.nome}</span>
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
          <FaChevronLeft  onClick={()=> diminuirNumero(index)} />
        </button>
        <span>{item.quantidade}</span>
        <button>
          <FaChevronRight onClick={()=> aumentarNumero(index)} />
        </button>
      </div>
    </div>
  )
  
  const botaoAddItem = () => {
    const novoItem = {
      nome: inputValue,
      quantidade: 1,
      selecionado: false
    };
    const novosItems = [...items,novoItem];
    setItems(novosItems); 
    setInputValue('');
    
  }

  const itemSelecionado = index => {
    const novosItems = [...items];
    novosItems[index].selecionado = !novosItems[index].selecionado
    setItems(novosItems)
  }

  const diminuirNumero = index => {
    const novosItems = [...items];
    if(novosItems[index].quantidade==1){
      novosItems.splice(index,1)
      setItems(novosItems);
    }
    novosItems[index].quantidade--;
    setItems(novosItems);
    totalDeItems();
  }

  const aumentarNumero = index => {
    const novosItems = [...items];
    novosItems[index].quantidade++;
    setItems(novosItems);
    totalDeItems();

  }

  const totalDeItems = () => {
    const contagemTotalDeItems = items.reduce((total, item)=>{
      return total+item.quantidade;
    },0)
    setContagemTotalDeItems(contagemTotalDeItems);
  }

  return (
    <main className="bg-gradient-to-r from-moonlitAsteroid-100 via-moonlitAsteroid-200 to-moonlitAsteroid-300 text-slate-200 text-md md:text-2xl">
      <section className='min-h-screen flex justify-center items-center'>

        {/* Div Principal */}
        <div className=' bg-cyan-700 py-6 px-2 rounded-md shadow-xl md:px-4'>

          {/* Campo de Texto:Adicionar Item */}
          <div className='flex bg-gradient-to-r from-sky-300 to-blue-300 rounded-md py-2 px-2 mb-4 md:px-6'>
            <input value={inputValue} onChange={e=> setInputValue(e.target.value)}  className='placeholder:text-slate-200 placeholder:font-bold bg-transparent  outline-none' placeholder='Adicionar Item. . .' />
            <FaPlus className='self-center' onClick={()=>botaoAddItem()} />
          </div>

          {/* Lista de Itens */}
          <div>
            {listaDeItems}
          </div>

          {/* Total */}
          <div className='text-end pt-2 font-bold'>Total: {contagemTotalDeItems}</div>
        </div>

      </section>
    </main>
  )
}

export default App

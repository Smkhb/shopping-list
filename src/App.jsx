import './App.css'
import { FaCheckCircle, FaCircle, FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function App() {

  return (
    <main className="bg-gradient-to-r from-moonlitAsteroid-100 via-moonlitAsteroid-200 to-moonlitAsteroid-300">
      <section className='min-h-screen flex justify-center items-center'>

        <div>
          <div>
            <input placeholder='Add an item...' />
            <FaPlus />
          </div>

          <div>
            <div>

              <div>
                {false ? (
                  <>
                    <FaCheckCircle />
                    <span>Item 1</span>
                  </>
                ) : (
                  <>
                    <FaCircle />
                    <span>Item 1</span>
                  </>
                )}
              </div>

              <div>
                <button>
                  <FaChevronLeft />
                </button>
                <span> 1 </span>
                <button>
                  <FaChevronRight />
                </button>
              </div>

            </div>
          </div>

          <div>Total: 6</div>
        </div>


      </section>
    </main>
  )
}

export default App

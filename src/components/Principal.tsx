import useFetch from '../hooks/useFetch'

interface Categories {
  id: number,
  name: string
}

interface Trivia {
  triviaCategories: Categories[]
  timestamp: string
  'rapidapi_profile': string
}

const Principal = () => {
  const categories = useFetch<Trivia>('https://trivia-questions-api.p.rapidapi.com/fetchCategories')

  return (
    <section className='flex flex-col items-center gap-y-6'>
      <h2 className='text-xl text-center'>
        ¿Cuántas preguntas puedes responder correctamente? ¡Averígualo acá!
      </h2>
      <p>
        Elige el tema del que creas poder dar tu mejor desempeño, va desde
        deportes hasta temas históricos.
      </p>
      <form className='flex flex-col gap-y-4'>
        {
          categories.state === 'idle' || categories.state === 'loading' ? <span>Cargando...</span> : (
            <select name='select' className='text-sky-950 rounded-lg max-w-60 p-1 outline-sky-950'>
              <option disabled selected>
                Selecciona una categoría
              </option>
              {
                categories.data !== null && categories.data.triviaCategories.map(cat => (
                  <option key={cat.id} value={cat.name}>{cat.name}</option>
                ))
              }
            </select> 
          )
        }
        <button className='bg-sky-600 py-2 rounded-md hover:opacity-90 transition duration-200'>
          ¡Iniciar!
        </button>
      </form>
    </section>
  )
}

export default Principal

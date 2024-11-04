import { Dispatch, FormEvent, SetStateAction } from 'react'
import useFetch from '../hooks/useFetch'
import Spinner from './ui/Spinner'

interface Categories {
  id: number,
  name: string
}

interface Trivia {
  'trivia_categories': Categories[]
}

interface Props {
  setCategoryId: Dispatch<SetStateAction<number | null | undefined>>
}

const Principal = ({ setCategoryId }: Props) => {
  const { data, state } = useFetch<Trivia>('https://opentdb.com/api_category.php')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const select = form.querySelector('select[name="select"]') as HTMLSelectElement
    setCategoryId(parseInt(select.value))
  }

  if (state === 'idle' || state === 'loading') {
    return <Spinner />
  }

  if (state === 'error') {
    return <span>No se ha podido cargar la información</span>
  }
  
  return (
    <section className='flex flex-col items-center gap-y-6'>
      <h2 className='text-xl text-center'>
        ¿Cuántas preguntas puedes responder correctamente? ¡Averígualo acá!
      </h2>
      <p>
        Elige el tema del que creas poder dar tu mejor desempeño, va desde
        deportes hasta temas históricos.
      </p>
      <form className='flex flex-col gap-y-6' onSubmit={onSubmit}>
        <select
          name='select'
          className='bg-sky-600 text-white rounded-md max-w-60 py-1 px-2 outline-none'
        >
          {
            data && data['trivia_categories'].map((cat, i) => (
               i < 5 && (
                <option key={cat.id} value={cat.id} className='bg-inherit text-inherit'>
                  {cat.name}
                </option>
              )
            ))
          }
        </select> 
        <button className='bg-sky-600 py-2 rounded-md hover:opacity-90 transition duration-200'>
          ¡Iniciar!
        </button>
      </form>
    </section>
  )
}

export default Principal

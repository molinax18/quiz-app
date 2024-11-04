import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import Spinner from './ui/Spinner'

interface QuestionData {
  type: 'multiple' | 'boolean'
  difficulty: string
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

interface Data {
  response_code: number
  results: QuestionData[]
}

interface Props {
  categoryId: number
}

const Quiz = ({ categoryId }: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const { data, state } = useFetch<Data>(
    `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=medium`
  )

  const formatText = (content: string) => {
    const txt = document.createElement('textarea')
    txt.innerHTML = content
    return txt.value
  }

  if (state === 'idle' || state === 'loading') {
    return <Spinner />
  }

  if (data?.response_code !== 0) {
    return <span>No se ha podido cargar la información</span>
  }

  if (data.results[currentQuestion].type === 'boolean') {
    return <p>XD</p>
  }

  return (
    <section>
      <h2 className='text-center p-1 text-lg font-bold'>
        {formatText(data?.results[currentQuestion].question)}
      </h2>
      <article>
        <ul className='flex flex-col gap-4 mt-10'>
          {data?.results[currentQuestion].incorrect_answers.map((ans, key) => (
            <li
              key={key}
              className='p-3 bg-sky-500 rounded-md cursor-pointer hover:opacity-90'
            >
              {formatText(ans)}
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default Quiz

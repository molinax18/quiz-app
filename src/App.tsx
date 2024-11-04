import { useState } from 'react'
import Principal from './components/Principal'
import Quiz from './components/Quiz'
import QuizDev from './components/QuizDev'

const App = () => {
  const [categoryId, setCategoryId] = useState<number | null>()

  return (
    <main className="flex items-center justify-center bg-[url('../public/img/quiz-bg.webp')] object-cover min-h-screen">
      <div className='flex flex-col items-center gap-y-12'>
        <h1 className='text-5xl text-white bg-sky-950 p-6 rounded-xl font-bold'>
          ¡Quiz!
        </h1>
        <div className='bg-sky-950 text-white p-6 rounded-xl min-h-80 max-w-md'>
          {!categoryId ? <Principal setCategoryId={setCategoryId} /> : <Quiz categoryId={categoryId} />}
        </div>
      </div>
    </main>
  )
}

export default App

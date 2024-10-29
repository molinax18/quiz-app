import Principal from './components/Principal'
import QuizContainer from './components/QuizContainer'

const App = () => {
  return (
    <main className="flex items-center justify-center bg-[url('../public/img/quiz-bg.webp')] object-cover min-h-screen">
      <div className='flex flex-col items-center gap-y-12'>
        <h1 className='text-5xl text-white bg-sky-950 p-6 rounded-xl'>¡Quiz!</h1>
        <QuizContainer>
          <Principal />
        </QuizContainer>
      </div>
    </main>
  )
}

export default App

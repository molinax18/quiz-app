interface Props {
  children: React.ReactNode
}

const QuizContainer = ({ children }: Props) => {
  return (
    <div className='bg-sky-950 text-white p-6 rounded-xl max-w-xl min-h-80'>
      {children}
    </div>
  )
}

export default QuizContainer

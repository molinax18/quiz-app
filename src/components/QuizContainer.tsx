import { useState } from "react"
import Principal from "./Principal"

const QuizContainer = () => {
  const [categoryId, setCategoryId] = useState<number | null>()
  
  return (
    <div className='bg-sky-950 text-white p-6 rounded-xl max-w-xl min-h-80 min-w-80'>
      {!categoryId ? <Principal setCategoryId={setCategoryId} /> : <span>Ha elegido categoría</span>}
    </div>
  )
}

export default QuizContainer

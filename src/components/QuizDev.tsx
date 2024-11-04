const QuizDev = () => {
  return (
    <section>
      <h2 className='p-1 text-lg text-center font-bold'>
        ¿Cuál es la capital de Israel? Hay dos respuestas
      </h2>
      <article>
        <ul className='flex flex-col gap-4 mt-10'>
          <li className="p-3 bg-sky-500 rounded-md">Respuesta</li>
          <li className="p-3 bg-sky-500 rounded-md">Respuesta</li>
          <li className="p-3 bg-sky-500 rounded-md">Respuesta</li>
        </ul>
      </article>
    </section>
  )
}

export default QuizDev

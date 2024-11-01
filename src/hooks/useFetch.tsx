import { useEffect, useState } from 'react'

type FetchState<T> =  {
  state: 'idle' | 'loading' | 'error' | 'success'
  data: null | T
  error: null | Error
}

const useFetch = <T,>(url: string) => {
  const [fetchState, setFetchState] = useState<FetchState<T>>({
    state: 'idle',
    data: null,
    error: null
  })

  useEffect(() => {
    async function getQuiz() {
      try {
        setFetchState(prev => ({
          ...prev,
          state: 'loading'
        }))
        
        const res = await fetch(url)

        if(!res.ok) {
          setFetchState(prev => ({
            ...prev,
            state: 'error',
            error: new Error(res.statusText)
          }))
        } else {
          const json = await res.json()
          
          setFetchState(prev => ({
            ...prev,
            state: 'success',
            data: json,
            error: null
          }))
        }
      } catch (error) {
        setFetchState(prev => ({
          ...prev,
          state: 'error',
          error: error as Error
        }))
      }
    }
    getQuiz()
  }, [url])

  return fetchState
}

export default useFetch

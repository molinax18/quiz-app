import { useEffect, useState } from 'react'

const apiKey = import.meta.env.VITE_API_KEY
const host = 'trivia-questions-api.p.rapidapi.com'

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
        
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': host
          }
        })

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

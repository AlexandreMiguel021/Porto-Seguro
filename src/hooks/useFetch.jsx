import { useEffect, useState } from 'react'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://5cf9ae9df26e8c00146cff8d.mockapi.io',
})

function useFetch(url) {
  const [data, setData] = useState([])
  const [err, setErr] = useState()
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    api
      .get(url)
      .then(res => setData(res.data))
      .catch(err => {
        console.log(err)
        setErr(err)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [])

  return { data, err, isFetching }
}

export default useFetch

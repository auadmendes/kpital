import axios from "axios"
import { useEffect, useState } from "react"
import { exerciseOptions } from "../utils/fetchData"



export function useFetch<T = unknown>(url, options) {
  const [data, setData] = useState<T | null>(null);
  useEffect(() => {
    axios.get(url, exerciseOptions)
      .then(response => {
        setData(response.data)
      })
  }, [])

  return { data }

}
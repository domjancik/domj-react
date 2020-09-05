import { useLocation } from 'react-router-dom'

export default function useQuery() {
  const location = useLocation()
  let query
  if (!location.search) {
      query = location.hash.replace("#", "?")
  } else {
      query = location.search
  }
  console.log(query);
  
  return new URLSearchParams(query)
}

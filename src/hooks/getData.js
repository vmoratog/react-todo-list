import { useState, useEffect } from 'react'

const getData = (url = 'https://jsonplaceholder.typicode.com/users/1') => {
  const [person, usePerson] = useState([])
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(myData => usePerson(myData))
  }, [])

  return person
}

export default getData
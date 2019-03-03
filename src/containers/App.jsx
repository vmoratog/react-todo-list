import React from 'react'
import About from '../components/About'
import Main from '../components/Main'
import getData from '../hooks/getData'

const App = () => {
  /*
  state = {
    data: ''
  }
  this.setState({
    data: [useData] no sure useData si va solo o con algo
  })
  */
 const data = getData('https://jsonplaceholder.typicode.com/photos/1') || {}
  
  return (
    <Main>
      <About />
      <img src={data.thumbnailUrl} />
      {
        //JSON.stringify(data)
        /*
        {data}
        <button onClick={() => useData(data+1)}>click</button>
        */
      }
    </Main>
  )
}

export default App 
import React from 'react'
import ReactDom from 'react-dom'
import './static/css/main.css'


const lst = [
 {"LST":43},
 {"JGN":-85},
 {"PSD": -100}
]

function App(){
  return (
    <section>
      {lst.map((item) => <div>{Object.keys(item)} {Object.values(item)}</div>)}
    </section>
    )
}

function Table(){
  return(
    <table>
      <thead></thead>

    </table>
  )
}

ReactDom.render(<App/>, document.querySelector('.spotlight'));

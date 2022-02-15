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


// <table class="table">
// 							<thead>
// 							  <tr>
// 								<th scope="col">#</th>
// 								<th scope="col">First</th>
// 								<th scope="col">Last</th>
// 								<th scope="col">Handle</th>
// 							  </tr>
// 							</thead>
// 							<tbody>
// 							  <tr>
// 								<th scope="row">1</th>
// 								<td>Mark</td>
// 								<td>Otto</td>
// 								<td>@mdo</td>
// 							  </tr>
// 							  <tr>
// 								<th scope="row">2</th>
// 								<td>Jacob</td>
// 								<td>Thornton</td>
// 								<td>@fat</td>
// 							  </tr>
// 							  <tr>
// 								<th scope="row">3</th>
// 								<td colspan="2">Larry the Bird</td>
// 								<td>@twitter</td>
// 							  </tr>
// 							</tbody>
// 						  </table>
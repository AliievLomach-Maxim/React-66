import React from 'react'
import ReactDOM from 'react-dom/client'
import { Card } from './components/Card'

// import './index.css'

// const div = document.createElement('div')
// div.id = 'some-ID'
// div.classList = 'test-class'

// const p = document.createElement('p')
// p.textContent = ' I am P'

// div.append(p)

// const root = document.getElementById('root')
// root.append(div)

// const paragraph = React.createElement('p', {
// 	id: 'test-P-Id',
// 	children: ['I am P'],
// })

// const p = <p id='test-Id'>I am P</p>

// const div = React.createElement('div', {
// 	name: 'main',
// 	id: 'test-Id',
// 	className: 'test-class',
// 	children: p,
// })

// const div = (
// 	<div name='main' id='test' className='test-class'>
// 		{p}
// 	</div>
// )

// console.log('card :>> ', card)
ReactDOM.createRoot(document.getElementById('root')).render(<Card />)
// ReactDOM.render(div, root)

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<React.StrictMode></React.StrictMode>)

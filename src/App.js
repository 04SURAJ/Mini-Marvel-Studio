import React from 'react'
import NavScrollExample from './Components/Appbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Card from './Components/Card'
import { data } from './Components/data'
import UncontrolledExample from './slides';

function App() {
  return (
    <>
      <NavScrollExample/>
      <div className='first'>
        <h1 className='text-center text-danger'>Marvel Cinematic Universe</h1>
      </div>
      

        <hr/>
        <div>
          <UncontrolledExample/>
        </div>
        <br/>
        <div className="container grids">
          {
            data.map((val)=>{
              return <Card name={val.movie_name} img={val.img} desc = {val.desc}/>
            })
          }
        </div>
    </>
  )
}

export default App

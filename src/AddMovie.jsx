import React from 'react'
import './App.css';
import { useNavigate } from 'react-router-dom';

function AddMovie() {

    const nav=useNavigate();

    const handleCancel=()=>{
        nav('/')
    }

   
    

  return (
    <div>
        <form>
        <input type='text' placeholder='Title'></input><br></br><br></br>
        <input type='text' placeholder='Director'></input><br></br><br></br>
        <select className='genre'><br></br>
            <option>Genre</option>
            <option>Comedy</option>
            <option>Action</option>
            <option>Horour</option>
        </select><br></br><br></br>
        <input type='number' placeholder='release year'></input><br></br><br></br>
        <textarea placeholder='Synopsis'></textarea><br></br><br></br>
        <input type='url' placeholder='Poster Image URL'></input><br></br><br></br>
        <div className='buttons'>
        <button className='cancel-button' onClick={handleCancel}>Cancel</button>
        <button className='submit-button'>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default AddMovie
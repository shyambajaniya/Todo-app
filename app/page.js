"use client"
import Image from 'next/image'
import React, { useState } from 'react';

export default function Home() {
  const [tital, settital] = useState("");
  const [desc, setdesc] = useState("");

  const [mainTask, setMainTask] = useState([]);

  // for adding

  const submitHandler = (e) => {
    e.preventDefault()
    settital("")
    setdesc("")
    // console.log(tital);
    // console.log(desc);

    setMainTask([...mainTask, { tital, desc }])
  }


  //  for deleting

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }
  let renderTask = <h2>No Task Availabe</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((e, i) => (
      <li key={i} className='flex  items-center justify-between mb-5'>
        <div className='flex items-center justify-between  w-2/3	'>
          <h4 className='text-2xl font-semibold '>{e.tital}</h4>
          <h4 className='text-lg font-medium'>{e.desc}</h4>

        </div>
        <button
          onClick={(i) => { deleteHandler(i) }}
          className="bg-red-400 text-white px-5 py-2 rounded font-bold">
          Delete
        </button>
      </li>
    ))
  }



  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">Shyam's TodoList</h1>
      <form onSubmit={submitHandler}>
        <input type="text"
          className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2 '
          placeholder='Enter Tital Here'
          value={tital}
          onChange={(e) => {
            settital(e.target.value)
          }}
        />

        <input type="text"
          className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2 '
          placeholder='Enter Discription Here'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)

          }}
        />

        <button
          className='bg-black text-white px-4 py-3 m-5 text-2xl font-bold rounded' >
          Add Task
        </button>

      </form>

      <hr />

      <div className="p-8 bg-slate-200">
        <ul>
          {renderTask}
        </ul>
      </div>



      <table class="table-auto">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </>

  )
}



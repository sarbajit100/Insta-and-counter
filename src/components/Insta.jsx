import React, { useState } from 'react'

function Insta() {
    const [login, setlogin] = useState(true)
    const loginSwitch = () => {
        setlogin(!login)}
  return (
    <div className="flex items-center justify-center flex-col bg-slate-400">
        <div className="flex items-center justify-center flex-col">
            <h1 className="font-bold text-4xl font-serif">Instagram</h1>
            <input className="border-2 border-yellow-400 rounded h-10 w-60 m-[10px]" hidden={login} type="text" placeholder='Mobile Number or Email' />
            <input className="border-2 border-yellow-400 rounded h-10 w-60 m-[10px]" hidden={login} type="text" placeholder='Fullname' />
            <input className="border-2 border-yellow-400 rounded h-10 w-60 m-[10px]" type="email" placeholder='Mobile Number or Email' />
            <input className="border-2 border-yellow-400 rounded h-10 w-60 m-[10px]" type="text" placeholder='password' />
            <button className="h-10 w-20 bg-sky-500 rounded-md">{login? 'Sign in' : 'Sign up'}</button>
            </div>
        <footer>
            {login?"Don't have account?":"have an account?"} <span className="text-indigo-600 cursor-pointer" onClick={loginSwitch}>{login?"Sign up":"Log in"}</span>
        </footer>
    </div>
    
  )
}

export default Insta

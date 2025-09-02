"use client"
import React, { useState } from 'react'

const page = () => {
    const [state, setState] = useState(null)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const submitFormHandler = (e) => {
        e.preventDefault()
        setState({
            success: true,
            message: "Login Successfully"
        })

        setFormData({
            email: "",
            password: ""
        })
    }
    return (
        <div className="flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-gray-600 text-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold  mb-6 text-center">
                    Login here
                </h2>
                <form className="space-y-4" >
                    <div>
                        <label className="block  font-medium mb-1" htmlFor="email" >
                            Email
                        </label>
                        <input
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block  font-medium mb-1" htmlFor="message">
                            Password
                        </label>
                        <input
                            value={formData.password}
                            onChange={handleChange}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>
                    <button
                        onClick={submitFormHandler}
                        type="submit"
                        className="w-full bg-[#f70672] cursor-pointer hover:bg-[#c7055d] font-semibold py-2 rounded-lg transition-colors duration-300"
                    >
                        Login
                    </button>
                    {/* <p className={`text-center  rounded-lg font-semibold ${state?.success ? 'bg-green-700 text-white py-2' : 'bg-red-700 text-white py-2'}`}>{state?.message}</p> */}
                    {
                        state && (
                            <p className={` py-2 text-center rounded-lg ${state.success ? 'bg-green-700' : 'bg-red-700'}`}>{state.message}</p>
                        )
                    }
                </form>
            </div>
        </div >
    )
}

export default page
'use client'
import { useFormStatus } from 'react-dom';
import { contactAction } from './contact.action'
import React, { useActionState } from "react";

//for client component
// const contactAction = (formData) => {
//     const { fullName, email, message } = Object.fromEntries(formData.entries())
//     console.log("Full Name : ", fullName, " Email : ", email, " Message : ", message);
// }

const ContactForm = () => {

    //React 19 useActionState
    const [state, formAction, isPending] = useActionState(contactAction, null);
    // console.log("State > ", state?.success);

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-gray-600 text-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold  mb-6 text-center">
                    Get In Touch
                </h2>
                <form className="space-y-4" action={formAction}>
                    <div>
                        <label className="block  font-medium mb-1" htmlFor="name" >
                            Name
                        </label>
                        <input
                            name="fullName"
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block  font-medium mb-1" htmlFor="email" >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block  font-medium mb-1" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows="4"
                            placeholder="Your message..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 resize-none"
                        ></textarea>
                    </div>
                    <Submit />
                    {/* <p className={`text-center  rounded-lg font-semibold ${state?.success ? 'bg-green-700 text-white py-2' : 'bg-red-700 text-white py-2'}`}>{state?.message}</p> */}
                    {
                        state && (
                            <p className={` py-2 text-center rounded-lg ${state.success ? 'bg-green-700' : 'bg-red-700'}`}>{state.message}</p>
                        )
                    }
                </form>
            </div>
        </div >
    );
};

export default ContactForm;

const Submit = () => {
    const { pending, data, method, action } = useFormStatus()
    // console.log("DATA > ", data?.get("fullName"));
    // console.log("DATA > ", data?.get("email"));

    return (
        <button
            disabled={pending}
            type="submit"
            className="w-full bg-[#f70672] cursor-pointer hover:bg-[#c7055d] font-semibold py-2 rounded-lg transition-colors duration-300"
        >
            {
                pending ? <span>Loading....</span> : "Submit"
            }

        </button>
    )
}

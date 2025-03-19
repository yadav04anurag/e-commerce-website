import React from 'react'

function Newsletterbox() {
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };
    return (
        <div className="text-center mb-2">
            <p className="text-2xl font-medium text-gray-800">
                Subscribe now & get 20% off
            </p>
            <p className="text-gray-400 mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto mt-4">
                <input
                    className="w-full sm:flex-1 outline-none border p-2 rounded-md"
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="bg-black text-white text-xs px-10 py-4 rounded-md">
                    SUBSCRIBE
                </button>
            </form>
        </div>
    )
}

export default Newsletterbox
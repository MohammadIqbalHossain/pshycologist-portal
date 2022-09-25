import React, { useEffect, useState } from 'react'

function Psychiatrist() {


    const [psychiatrist, setPsychiatrist] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPsychiatrist(data))
    }, [])


    return (
        <div className="bg-gray-100">
            <h1 className="text-2xl font-bold porse text-center">Our Psychiatrists</h1>


            <div className="grid grid-cols-1 md:grid-cols-2">
                {
                    psychiatrist.map((doctor) => <div
                        key={doctor._id}

                    >
                        <div class="flex items-center m-10 border border-gray-200 rounded shadow p-3 flex-col md:flex-row">
                            <img src={doctor.img} alt="" width="130" class="rounded mr-4" />
                            <div class="text-gray-700 overflow-hidden ">
                                <h2 class="text-gray-900 font-bold text-2xl">{doctor.name}</h2>
                                <div class="text-sm">{doctor.email}</div>
                                <div class="text-sm">
                                    <p className="text-lg font-bold">Specialities: <span className="font-thin">{doctor.specialities}</span>
                                    </p>

                                    <p className="text-lg font-bold"> Education: <span className="font-thin">{doctor.education}</span>
                                    </p>

                                    <p className="text-lg font-bold"> experiance: <span className="font-thin"> {doctor.experiance}</span>
                                    </p>

                                    <button className="bg-[#9BD58B] px-10 py-2 text-xl rounded-full hover:text-white hover:bg-[#4B7B3F] font-bold my-5">
                                        Book
                                    </button>

                                    <button className="bg-[#9BD58B] px-10 py-2 text-xl rounded-full hover:text-white hover:bg-[#4B7B3F] font-bold my-5 md:ml-2">
                                        About Me
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    )
}

export default Psychiatrist
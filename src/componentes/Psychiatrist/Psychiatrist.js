import React from 'react'

function Psychiatrist() {
    return (
        <div>
            <h1 className="text-2xl font-bold porse text-center">Our Psychiatrists</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div class="flex items-center m-20 border border-gray-200 rounded shadow p-3 flex-col md:flex-row">
                    <img src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg" alt="" width="130" class="rounded mr-4" />
                    <div class="text-gray-700 overflow-hidden ">
                        <h2 class="text-gray-900 font-bold text-2xl">Sarah Dayan</h2>
                        <div class="text-sm">sarah@example.com</div>
                        <div class="text-sm">
                            <p className="text-lg font-bold"> Specialities: <span className="font-thin">Stress, Anxiety, addictions, anger management, self esteem, depression</span>
                            </p>

                            <p className="text-lg font-bold"> Education: <span className="font-thin"></span>
                            </p>

                            <p className="text-lg font-bold"> Specialities: <span className="font-thin"> 7+ years of experiance</span>
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

                <div class="flex items-center m-20 border border-gray-200 rounded shadow p-3 flex-col md:flex-row">
                    <img src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg" alt="" width="130" class="rounded mr-4" />
                    <div class="text-gray-700 overflow-hidden ">
                        <h2 class="text-gray-900 font-bold text-2xl">Sarah Dayan</h2>
                        <div class="text-sm">sarah@example.com</div>
                        <div class="text-sm">
                            <p className="text-lg font-bold prose lg:prose-xl"> Specialities: <span className="font-thin">Stress, Anxiety, addictions, anger management, self esteem, depression</span>
                            </p>

                            <p className="text-lg font-bold"> Education: <span className="font-thin"></span>
                            </p>

                            <p className="text-lg font-bold"> Specialities: <span className="font-thin"> 7+ years of experiance</span>
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

                <div class="flex items-center mx-20 border border-gray-200 rounded shadow p-3 flex-col md:flex-row">
                    <img src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg" alt="" width="130" class="rounded mr-4" />
                    <div class="text-gray-700 overflow-hidden ">
                        <h2 class="text-gray-900 font-bold text-2xl">Sarah Dayan</h2>
                        <div class="text-sm">sarah@example.com</div>
                        <div class="text-sm">
                            <p className="text-lg font-bold"> Specialities: <span className="font-thin">Stress, Anxiety, addictions, anger management, self esteem, depression</span>
                            </p>

                            <p className="text-lg font-bold"> Education: <span className="font-thin"></span>
                            </p>

                            <p className="text-lg font-bold"> Specialities: <span className="font-thin"> 7+ years of experiance</span>
                            </p>

                            <button className="bg-[#9BD58B] px-10 py-2 text-xl rounded-full hover:text-white hover:bg-[#4B7B3F] font-bold my-5 ">
                                Book
                            </button>

                            <button className="bg-[#9BD58B] px-10 py-2 text-xl rounded-full hover:text-white hover:bg-[#4B7B3F] font-bold my-5 md:ml-2">
                                About Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Psychiatrist
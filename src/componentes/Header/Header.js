import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
      <section className="bg-gradient-to-b from-blue-300 to-green-700">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>

        <div className="flex justify-center items-center mt-[200px]">
          <h1 className="md:text-5xl text-4xl font-blod text-white px-10 text-center">You deserve to be happy.</h1>

        </div>
        <p className="text-center font-bold text-xl my-5 text-white">What type of therapy are you looking for?</p>

        <div className="flex justify-center items-center my-10 flex-wrap ">
          <button className="bg-[#9BD58B] px-10 py-2 text-xl rounded-full hover:text-white hover:bg-[#4B7B3F] font-bold mx-6 my-5">
            Indivitual
            <br />
            <span className="text-sm font-light">for myself</span>
          </button>

          <button className="bg-[#9BD58B] px-10 py-2 text-xl rounded-full hover:text-white hover:bg-[#4B7B3F] font-bold mx-6 my-5">
            Couples
            <br />
            <span className="text-sm font-light">for me and my partner</span>
          </button>

          <button className="bg-[#9BD58B] px-10 py-2 text-xl rounded-full hover:text-white hover:bg-[#4B7B3F] font-bold mx-6 my-5">
            Teen
            <br />
            <span className="text-sm font-light">for my child</span>
          </button>
        </div>

      </section>

    </div>
  )
}

export default Header
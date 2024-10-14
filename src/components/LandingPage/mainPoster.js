import React from "react";
import './mainPoster.css';
import avatar from '../Images/img_avatar.png';

const MainPoster= () =>{

    return(
        <section className="text-gray-700 body-font">
  <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">A to Z</span><br />
            <div className="animeCard1"><span className="block text-indigo-600 xl:inline">Deploy</span></div>
                        <div className="animeCard2"><span className="block text-indigo-600 xl:inline">Monitor</span></div>
                        <div className="animeCard3"><span className="block text-indigo-600 xl:inline">Develop</span></div>
          </h1>
          <br />
      <p className="mb-8 leading-relaxed italic">"The key to pursuing excellence is to embrace an organic, long-term learning process, and not to live in a shell of static, safe mediocrity. Usually, growth comes at the expense of previous comfort or safety."
<br />— Josh Waitzkin</p>
      <div className="flex justify-center">
        <a href="https://github.com/KumarGauravSingh/" target="_new"><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Visit Github</button></a>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={avatar} />
    </div>
  </div>
</section>
    );

}

export default MainPoster;
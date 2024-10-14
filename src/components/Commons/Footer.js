import React from "react";

const Footer = () =>{

    return(
    <div className="bg-indigo-500">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col">
      <p className="text-slate-100 text-sm text-center">© 2022 Tailwind and React Project —
        <a href="https://twitter.com/k_gaurav_singh" className="text-rose-100 ml-1" target="_blank" rel="noopener noreferrer">@Kumar_Gaurav_Singh</a>
      </p>
    </div>
  </div>
    );
}

export default Footer;
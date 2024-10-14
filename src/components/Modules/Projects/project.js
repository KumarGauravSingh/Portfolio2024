import React from "react";

const Project= (props) =>{
    return (

        <div className="w-full rounded overflow-hidden shadow-lg my-8 bg-amber-100 hover:translate-y-2 hover:shadow-xl transition duration-300">
             <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{ props.name }</div>
                <p className="text-gray-700 text-base">{ props.description }</p>
                <div className="flex justify-center pt-2">
        <a href={props.url} target="_new"><button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-m">View on Github</button></a>
      </div>
             </div>        
        </div>
        
    
);
}
export default Project;
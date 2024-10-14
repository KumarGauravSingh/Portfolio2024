import axios from "axios";
import React, {useState, useEffect} from "react";
import ProjectItem from "./projectItem";

const baseURL = "https://api.github.com/search/repositories?q=user:KumarGauravSingh+sort:author-date-asc";

export default function GetLatestRepos() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.items);
    });
  }, []);

  if (!post) return null;
  
  return (
      <div className="bg-amber-300">
          <div className="container grid md:gap-4 md:pl-0 mx-auto p-2 font-mono text-xl tracking-wide subpixel-antialiased font-semibold">The data below has been fetched using github API.</div>
          <div className=" container grid md:grid-cols-3 md:gap-4 md:pl-0 mx-auto grid-cols-1 pl-3">
     <ProjectItem item={post} />
    </div>
    </div>
  );
}
import  { useEffect, useState } from "react";
//import { useLoaderData } from "react-router-dom";

function GitHub() {
    // const data=useLoaderData()
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/jaiswalrahul2427")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="flex flex-row-reverse items-center justify-between p-4 text-4xl text-center text-white bg-blue-700 ">
        <div>
      GitHub Follower: {data.followers}
      <hr />
      GitHub Repo:{data.
public_repos
}
<hr />
<h1 className="text-black ">Bio:{ data.bio}</h1>
</div>
      <img className="justify-center bg-red-500 border-2 border-white rounded-full" src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  );
}

export default GitHub;

// export const githubInfolder=async()=>{
//     const response=await fetch('https://api.github.com/users/jaiswalrahul2427')
//     return response.json()
// }

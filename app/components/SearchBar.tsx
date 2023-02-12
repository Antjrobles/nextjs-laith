"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");

  return (
    <div className="text-left py-3 m-auto flex justify-center ">
    <input className="rounded text-lg mr-3 p-2 w-[450px]" type="text" placeholder="State, city or town" 
    value={location}
    onChange={(e) => setLocation(e.target.value)}
    />
    <button className="bg-red-600 rounded text-white py-2 px-6" onClick={() => {
      if(location === "banana") return;
      router.push("./search");
    }}>
    Let's Go
    </button>
  </div>
  )
}
export default SearchBar
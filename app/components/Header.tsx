import SearchBar from "./SearchBar";

;

export default function Header(){

  
return (
  <div className="h-64 bg-gradient-to-r from-[#010026] to-[#6a67be] p-3">
            <div className="text-center mt-10">
              <h1 className="text-white text-5xl font-bold mb-2">Find your table for any occasion</h1>
              <SearchBar />
            </div>

    
          </div>
)

}
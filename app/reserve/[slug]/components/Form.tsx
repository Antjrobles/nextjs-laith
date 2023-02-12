function Form() {
  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
    <input className="border rounded p-3 w-80 mb-4" type="text" placeholder="First Name" />
    <input className="border rounded p-3 w-80 mb-4" type="text" placeholder="Last Name" />
    <input className="border rounded p-3 w-80 mb-4" type="text" placeholder="Phone Number" />
    <input className="border rounded p-3 w-80 mb-4" type="text" placeholder="Email" />
    <input className="border rounded p-3 w-80 mb-4" type="text" placeholder="Occasion (optional)" />
    <input className="border rounded p-3 w-80 mb-4" type="text" placeholder="Request (optional)" />
    <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:gb-gray-300">Complete reservation</button>
    <p className="mt-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione impedit, laudantium possimus sequi eaque voluptatem id reprehenderit soluta earum? Ea, perspiciatis.</p>
  </div>
  )
}
export default Form
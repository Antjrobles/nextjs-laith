"use client"

function ReservationCard() {
  return (
    <div className="fixed w-[20%] bg-white rounded p-3 shadow-2xl">
    <div className="text-center border-b pb-2 font-bold">
      <h4 className="mr-7 text-lg">Make a reservation</h4>
    </div>
    <div className="my-3 flex flex-col">
      <label className="text-center" htmlFor="">
        Party Size
      </label>
      <select name="" className="border mt-2 pw-3 font-light" id="">
        <option value="">1 person</option>
        <option value="">2 people</option>
      </select>
    </div>
    <div className="my-3 flex justify-between">
      <div className="flex flex-col w-[48%]">
        <label htmlFor="">Date</label>
        <input type="text" className="py-3 border-b font-light w-28" />
      </div>
      <div className="flex flex-col w-[48%]">
        <label htmlFor="">Time</label>
        <select name="" id="" className="py-3 border-b font-light">
          <option value="">19:30 PM</option>
          <option value="">20:00 PM</option>
          <option value="">20:30 PM</option>
        </select>
      </div>
    </div>
    <div className="mt-5">
      <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">Find a time</button>
    </div>
  </div>
  )
}
export default ReservationCard
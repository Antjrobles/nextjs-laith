import Link from "next/link";


export default function RestaurantCard() {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
    <Link href="/restaurant/milestones-grill">
      <img
        src="https://img.freepik.com/free-photo/dietary-menu-healthy-vegan-salad-vegetables-broccoli-mushrooms-spinach-quinoa-bowl-flat-lay-top-view_2829-20115.jpg?w=740&t=st=1675935025~exp=1675935625~hmac=39cb86faed50592f4a0982ef1a5c414f187003d6fc8ad19cad344de27744bfbd"
        alt=""
        className="w-full h-36"
      />
      <div className="p-1">
        <h3 className="font-bold text-2xl mb-2 ">Milestone Grill</h3>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 ">45 reviews</p>
        </div>
        <div className="flex text-reg font-light capitalized">
          <p className="mr-3 ">Mexican</p>
          <p className="mr-3">$$$</p>
          <p>Toronto</p>
        </div>
        <p className="text-reg mt-1 font-bold">Booked 3 times today</p>
      </div>
    </Link>
  </div>
  )

}
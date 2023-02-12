import Link from "next/link";

export default function RestaurantCardSearch() {
  return (
    <div className="border-b flex pb-5">
      <img
        src="https://img.freepik.com/foto-gratis/ensalada-griega-tomate-fresco-pepino-cebolla-roja-albahaca-queso-feta-aceitunas-negras-hierbas-italianas_2829-4480.jpg?w=740&t=st=1675977079~exp=1675977679~hmac=3ef7961c00512363d8bcea25d24ff6d80ce04553de9d7c8e22992165f11c3ac4"
        alt=""
        className="w-44 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">Aiãna Restaurant Collective</h2>
        <div className="flex items-start">
          <div className="flex mb-2">****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <p className="mr-4">$$$</p>
            <p className="mr-4">Mexican</p>
            <p className="mr-4">Ottawa</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href="/restaurant/milestones-grill">View more information</Link>
        </div>
      </div>
    </div>
  );
}

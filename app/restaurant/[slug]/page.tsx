import Description from "./components/Description";
import Ratings from "./components/Ratings";
import ReservationCard from "./components/ReservationCard";
import RestaurantHeader from "./components/RestaurantHeader";
import RestaurantImages from "./components/RestaurantImages";
import RestaurantNavBar from "./components/RestaurantNavBar";
import RestaurantTitle from "./components/RestaurantTitle";
import Reviews from "./components/Reviews";

export default function RestaurantDetails() {
  return (
    <>
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavBar />
          <RestaurantTitle />
          <Ratings />
          <Description />
          <RestaurantImages />
          <Reviews />
        </div>
        <div className="w-[27%] relative text-reg shadow-2xl">
          <ReservationCard />
        </div>
    </>
  );
}

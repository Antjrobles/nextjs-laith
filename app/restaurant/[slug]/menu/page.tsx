import Menu from "../components/Menu";
import MenuCard from "../components/MenuCard";
import RestaurantHeader from "../components/RestaurantHeader";
import RestaurantNavBar from "../components/RestaurantNavBar";

export default function RestaurantMenu() {
  return (
    <>
     
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavBar />
          <Menu />
          <MenuCard />
        </div>
    
    </>
  );
}

import RestaurantHeader from "./components/RestaurantHeader";

export default function RestaurantLayout({
   children,
 }: { 
  children: React.ReactNode;
 }) {


  return (
    <main>
    
      <RestaurantHeader />
      <div className="flex m-auto w-9/12 justify-between items-start 0 -mt-11">
        {children}
      </div>

    
    
    </main>
  )
}
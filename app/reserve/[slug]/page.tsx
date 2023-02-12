import Form from "./components/Form";
import ReserveHeader from "./components/ReserveHeader";

export default function Reserve() {
  return (
    <>
        <div className="borer-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <ReserveHeader />
            <Form />
          </div>
        </div>
    </>
  );
}

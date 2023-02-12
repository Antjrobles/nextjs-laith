export default function Reviews() {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b p-5">What 100 people are saying</h1>
      <div>
        <div className="border-b pb-7mb-7">
          <div className="flex">
            <div className="w-1/6 flex flex-col items-center">
              <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                <h2 className="text-white text-2xl">AR</h2>
              </div>
              <p className="text-center">Antonio Robles</p>
            </div>
            <div className="ml-10 w5/6">
              <div className="flex items-center">
                <div className="flex mr5">*****</div>
              </div>
              <div className="mt-5">
                <p className="text-lg font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odit, ex doloremque excepturi
                  assumenda corrupti et quis eveniet perspiciatis ducimus a enim quas placeat minus rem adipisci, ipsa
                  delectus ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

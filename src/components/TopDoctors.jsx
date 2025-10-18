import { useNavigate } from "react-router-dom";
import { useDoctor } from "../context/UseDoctors";
function TopDoctors() {
  const navigated = useNavigate();
  const { doctors } = useDoctor();
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      {/* top doctors */}
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:p-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            // onClick={() => nevigate(`/appoinment/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 ease-in-out"
            key={index}
          >
            <div className="bg-blue-50">
              <img src={item.image} alt="" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-green-500 text-center">
                <p className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-sm shadow-gray-50"></p>{" "}
                <p>Available</p>
              </div>
              <h2 className="text-gray-900 text-lg font-medium whitespace-nowrap">
                {item.name}
              </h2>
              <p className="text-gray-500 text-sm whitespace-nowrap">
                {item.speciality}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* top doctors */}
      {/* show more */}
      <button
        // onClick={() => nevigate("/doctors")}
        onClick={() => navigated("/doctors")}
        className="bg-[#EAEFFF] mt-[60px] px-20 py-[18px] text-[#4B5563] text-5 font-[400] rounded-full capitalize cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.1]"
      >
        more
      </button>
      {/* show more */}
    </div>
  );
}

export default TopDoctors;

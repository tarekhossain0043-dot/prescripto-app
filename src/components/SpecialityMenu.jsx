import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";
function SpecialityMenu() {
  return (
    <div
      id="speciality"
      className="mt-[120px] flex flex-col items-center justify-center text-gray-800"
    >
      <div className="text-center mb-[64px]">
        <h2 className="text-[40px] font-[500] text-[#1F2937] mb-1">
          Find by Speciality{" "}
        </h2>
        <p className="text-center font-[400] text-[18px] leading-[27px]">
          Simply browse through our extensive list of trusted doctors, schedule{" "}
          <br className="hidden md:block" />
          your appointment hassle-free.
        </p>
      </div>
      <div className="grid items-center gap-[40px] overflow-scroll sm:grid-cols-1 md:grid-cols-3  lg:grid-cols-6">
        {specialityData.map((special, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center justify-center flex-shrink-0 transition-all duration-300 ease-in-out transform hover:translate-y-[12px]"
            key={index}
            to={`/doctors/${special.speciality}`}
          >
            <img
              src={special.image}
              alt={special.speciality}
              className="mb-[24px] w-[250px] md:w-full"
            />
            <p className="mb-0 text-center text-[22px] font-[500] md:text-[18px] md:font-[400">
              {special.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SpecialityMenu;

// import { useDoctor } from "../context/UseDoctors";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
function Banner() {
  const neviget = useNavigate();
  return (
    <div className="flex bg-primary px-[40px] md:px-[100px] rounded-md">
      {/* ----------left area ------------ */}
      <div className="flex-1 space-y-[40px] py-8 md:py-10 lg:py-16">
        <h2 className="text-2xl leading-[40px] md:text-4xl md:leading-[55px] lg:text-5xl lg:leading-[65px] xl:text-6xl xl:leading-[75px] font-semibold text-white">
          Book Appointment <br className="hidden md:block" />
          With 100+ Trusted Doctors
        </h2>
        <button
          onClick={() => {
            neviget("/login");
            screenTop(0, 0);
          }}
          className="bg-white px-8 py-2.5 flex items-center whitespace-nowrap gap-2 transform hover:scale-[1.05] cursor-pointer rounded-full transition-all ease-in-out duration-300 text-[18px] leading-[43px] text-[#595959] font-[400]"
        >
          Create account
        </button>
      </div>
      {/* ----------left area ------------ */}
      {/* ----------right area ------------ */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="absolute bottom-0 right-0 w-full max-w-md"
          src={assets.appointment_img}
          alt=""
        />
      </div>
      {/* ----------right area ------------ */}
    </div>
  );
}

export default Banner;

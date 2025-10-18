import { assets } from "../assets/assets";
function Hero() {
  return (
    <div className="bg-primary rounded-md flex flex-col flex-wrap gap-5 lg:flex-row px-5 md:px-[40px] lg:px-[30px] mt-[26px] items-center relative z-10">
      {/* ------------hero left side content---------- */}
      <div className="pt-[190px] sm:pt-[30px] sm:pb-[10px] md:pt-[50px] md:pb-[50px] lg:pt-[90px] lg:pb-[90px] pb-[160px] xl:max-w-[520px]">
        <h2 className="font-[600] sm:text-[25px] sm:leading-[35px] text-[63px] leading-[83px] md:text-[40px] md:leading-[60px] lg:text-[50px] lg:leading-[70px] xl:text-[45px] xl:leading-[65px] text-white whitespace-nowrap mb-[9px]">
          Book Appointment <br /> With Trusted Doctors
        </h2>
        <div className="flex flex-col items-start md:flex-row md:items-center lg:flex-col lg:items-start gap-[14px] mb-[15px]">
          <img
            src={assets.group_profiles}
            className="w-[130px xl:w-[100px]"
            alt="hro-profile-img"
          />
          <p className="font-[400] text-[18px] lg:text-[15px] lg:leading-[20px] xl:text-[16px] xl:leading-[22px] leading-[27px] text-white">
            Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.
          </p>
        </div>
        <div>
          <a
            href="#speciality"
            className="bg-white px-8 py-2.5 flex items-center whitespace-nowrap w-[235px] gap-2 transform hover:scale-[1.05] cursor-pointer rounded-full transition-all ease-in-out duration-300 text-[18px] leading-[43px] text-[#595959] font-[400]"
          >
            Book appointment
            <img
              src={assets.arrow_icon}
              className="text-white"
              alt="btn-arrow"
            />
          </a>
        </div>
      </div>
      {/* ------------hero left side content---------- */}
      {/* ------------hero right side img---------- */}
      <div className="static lg:absolute sm:h-full right-0 bottom-0 max-h-[700px]">
        <img
          src={assets.header_img}
          alt="hero-absolute-img"
          className="h-full object-cover"
        />
      </div>
      {/* ------------hero right side img---------- */}
    </div>
  );
}

export default Hero;

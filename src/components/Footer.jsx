import { assets } from "../assets/assets";
function Footer() {
  return (
    <>
      <div className="flex items-start justify-center space-x-[30px] pt-[130px] pb-[60px] text-[#4B5563] text-[14px] leading-[30px] font-[400]">
        {/* -------- left area ------- */}
        <div>
          <img src={assets.logo} alt="" />
          <p className=" mt-[41px] text-[18px] font-[400] leading-[30px] text-[#4B5563]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* -------- left area ------- */}
        {/* -------- Center area ------- */}
        <div>
          <p className="mb-[20px] font-medium uppercase">COMPANY</p>
          <ul>
            <li className="capitalize">Home</li>
            <li className="capitalize">About us</li>
            <li className="capitalize">Contact us</li>
            <li className="capitalize">Privacy policy</li>
          </ul>
        </div>
        {/* -------- Center area ------- */}
        {/* -------- right area ------- */}
        <div>
          <p className="mb-[20px] font-medium uppercase">GET IN TOUCH</p>
          <ul>
            <li className="capitalize cursor-pointer hover:text-primary">
              <a href="tel:+1-212-456-7890">+1-212-456-7890</a>
            </li>
            <li className="capitalize cursor-pointer hover:text-primary">
              <a href="mailto:greatstackdev@gmail.com">
                greatstackdev@gmail.com
              </a>
            </li>
          </ul>
        </div>
        {/* -------- right area ------- */}
      </div>
      {/* Copy Write  */}
      <div>
        <hr className="bg-[#BDBDBD] w-full h-[1px] my-[20px]" />
        <p className="text-[18px] font-[400] leading-[30px] text-[#4B5563] pb-[20px] mb-0 text-center">
          Copyright © 2025 Tanvir hasan - All Right Reserved.
        </p>
      </div>
      {/* Copy Write  */}
    </>
  );
}

export default Footer;

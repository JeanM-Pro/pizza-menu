import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

export const Footer = () => {
  return (
    <>
      <div className="w-full h-full flex justify-between items-center">
        <div className="flex items-center w-[50%] ">
          <div className="bg-[#c81b16] p-1 rounded-[50%] flex w-fit">
            <BsFillTelephoneFill size={12} className="text-white" />
          </div>
          <a href="tel:+1234567890" className="font-semibold ml-1 text-sm">
            +123-456-7890
          </a>
        </div>

        <div className="flex w-[50%] items-center">
          <ImLocation2 size={22} className="text-[#c81b16] flex-none" />

          <a
            href="https://www.google.com/maps/place/Pra%C3%A7a+Elpidio+Fialho/@-28.4496933,-52.2004744,18.96z/data=!4m6!3m5!1s0x94e29ca85f6a1fd1:0x76726949432fb492!8m2!3d-28.4494124!4d-52.200217!16s%2Fg%2F11bc7r5f45?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold ml-1 text-sm"
          >
            123 Anywhere st., Any City, ST 12345
          </a>
        </div>
      </div>
    </>
  );
};

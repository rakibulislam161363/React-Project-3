// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Button,
// } from '@heroui/react';



export default function Navbars() {
  return (
    <>
      <section className="container px-1">
        <div className="flex justify-around items-center">
          <img className="md:w-[100px] w-20 h-10 md:h-[49px] mt-2" src="Group(1).png" alt="" />

          {/* Step two */}
          <div className="border-1 border-[#ADADAD] flex items-center rounded-full h-8 lg:h-[51px] w-40 md:w-[400px] lg:w-[625px] justify-between p-2 md:pl-3">
            <div className=" flex gap-5">
              <input
                className="border-none outline-none text-xs md:text-lg"
                type="text"
                placeholder="restaurant, hotel, service...."
              />
              <div className="w-[1px] md:mt-1 lg:mt-0 h-[19px] bg-[#7A7A7A] hidden md:flex"></div>
              <p className="text-[#7A7A7A] hidden md:flex">Singapour...</p>
            </div>
            <div className="flex items-center">
              <button>
                <img
                  className="bg-[#1677BD] hover:bg-gray-400 hover:text-black p-1 lg:p-3 rounded-full hidden md:flex"
                  src="Vector.png"
                  alt=""
                />
              </button>
            </div>
          </div>


          {/* Step three */}
          <div className="flex gap-2 items-center">
            <img className="h-5 w-5 text-[#595959]" src="Group(2).png" alt="" />
            <button className="bg-black text-white md:p-3 p-2 rounded-full px-3 text-xs hover:bg-gray-300 hover:text-black">MyFeedback for business</button>
          </div>
        </div>
      </section>
    </>
  );
}

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
      <section>
        <div className="flex justify-around items-center">
          <img className="w-[100px] h-[49px]" src="Group(1).png" alt="" />
          <div className="border-1 border-[#ADADAD] flex items-center rounded-full p-1 h-[51px] w-[625px] justify-between pl-4">
            <div className=" flex gap-5">
              <input
                className="border-none outline-none"
                type="text"
                placeholder="restaurant, hotel, service...."
              />
              <div className="w-[1px] h-[19px] bg-[#7A7A7A]"></div>
              <p className="text-[#7A7A7A]">Singapour...</p>
            </div>
            <div className="flex items-center">
              <button>
                <img
                  className="bg-[#1677BD] p-3 rounded-full"
                  src="Vector.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <img className="h-5 w-5 text-[#595959]" src="Group(2).png" alt="" />
            <button className="bg-black text-white p-3 rounded-full px-3">MyFeedback for business</button>
          </div>
        </div>
      </section>
    </>
  );
}

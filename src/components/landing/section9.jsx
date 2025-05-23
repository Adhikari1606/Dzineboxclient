import React from "react";
import UserCard from "../../assets/userCard";
import section9Image from "/src/assets/landing/section9.png";

export default function Section9() {
  return (
    <div className="flex relative text-center flex-col  justify-center items-center px-6 sm:px-10 lg:px-16 py-0 md:py-10">
      <h2 className="text-4xl py-2 md:text-6xl font-bold text-[#092866]">
        Our Presence & <span className="text-[var(--color2)]">Testimony</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center w-full py-10">
        <img src={section9Image} alt="section9" style={{boxShadow:'none'}} className="w-full md:w-1/2" />
      </div>

      <div className="flex md:absolute top-[15vh] justify-end md:mr-[35vw] flex-row gap-4 justify- w-full pt-10 flex-wrap">
        <UserCard
          name={"Ravi Prakash Aggarwal"}
          pos={"General Manager – IT Artech Information Systems"}
          desc={
            " Over past several years, I have worked extensively with Devarshi and DC Studio  to design, build and project manage several Artech  offices across India. All the projects have been designed and built to a very high industry standards. I recommend them with  enthusiasm and if any new opportunity comes up would be more than happy to engage them again for the future work."
          }
        />
      </div>
      <div className="flex md:absolute top-[45vh] justify-start md:ml-[25vw] flex-row gap-4 justify- w-full pt-10 flex-wrap">
        <UserCard
          name={"Rajnish Kapur"}
          pos={" President (India Operations) DMI"}
          desc={
            " Devarshi and DC Studio  is a rare gem among the many design and project execution firms. I have personally worked very closely  with Devarshi on multiple projects. The designs ,aesthetics, functionality, innovation and execution with super attention to details  were incredible and truly world class. The finished facilities in India were crown jewels across the DMI’s 30 + offices worldwide."
          }
        />
      </div>
      <div className="flex md:absolute top-[70vh] justify-end md:mr-[25vw] flex-row gap-4 justify- w-full pt-10 flex-wrap">
        <UserCard
          name={"Rajeev Christopher"}
          pos={"Director, Office Services – Publicis Sapient"}
          desc={
            " In DC Studio we found a partner that was truly aligned with our business delivery process. Their efficient space planning and know  how of latest technologies led to a creation of an office space which was not only addressing our needs but also way ahead of  times. The thoughtful use of technology enabled us to minimize the running costs. I wish the team good luck and would be keen to  engage them again for our future workspace design"
          }
        />
      </div>
    </div>
  );
}

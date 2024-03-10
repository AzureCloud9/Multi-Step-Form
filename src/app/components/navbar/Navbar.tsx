import Image from "next/image";
import bg from "../../../../public/bg-sidebar-mobile.svg";

export default function Navbar() {
  return (
    <div>
      <div className="lg:hidden">
          <Image
            src={bg}
            width={200}
            height={10}
            alt="background"
            className=" w-[100vw]"
          /> 
      </div>
        
    </div>
  )
}

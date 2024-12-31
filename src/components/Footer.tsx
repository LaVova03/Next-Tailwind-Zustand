import Image from "next/image";
import React from "react";

import Tg from "@/assets/icons/tg.svg";
import Inst from "@/assets/icons/inst.svg";
import Fb from "@/assets/icons/fb.svg";
import Twit from "@/assets/icons/twit.svg";

import Heading from "./Heading";

function Footer() {
  return (
    <div className="w-full h-[424px] flex items-center justify-center border-t-[1px] border-t-secondary-lightGray bg-secondary_black">
      <div className="w-[443px] h-[179px] flex items-center justify-between flex-col">
        <Heading variant="H5">СЛІДКУЙ ЗА НАМИ У СОЦМЕРЕЖАХ!</Heading>
        <div className="w-[356px] h-[80px] gap-3 flex flex-row">
          <Image
            className="cursor-pointer"
            src={Fb}
            alt="logo"
            width={80}
            height={80}
          />
          <Image
            className="cursor-pointer"
            src={Inst}
            alt="logo"
            width={80}
            height={80}
          />
          <Image
            className="cursor-pointer"
            src={Tg}
            alt="logo"
            width={80}
            height={80}
          />
          <Image
            className="cursor-pointer"
            src={Twit}
            alt="logo"
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;

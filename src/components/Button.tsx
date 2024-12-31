import React from "react";
import Image from "next/image";

import { ButtonProps } from "@/theme/types";
import { ButtonTypography, ButtonVariant } from "@/theme/themeProvider";

function Button({ variant, typography, icon, onClick, children }: ButtonProps) {
  const classTypography = ButtonTypography(typography);
  const classVariant = ButtonVariant(variant);

  if (!classTypography || !classVariant) {
    return <div>Loading...</div>;
  }

  return (
    <button
      className={`${classTypography} ${classVariant} flex items-center justify-center`}
      onClick={onClick}
    >
      {icon ? <Image src={icon} alt="logo" sizes="24px" /> : null}
      {children}
    </button>
  );
}

export default Button;

import React from "react";

import { HeadingVariant } from "@/theme/themeProvider";
import { GetHeadingProps, HeadingProps } from "@/theme/types";

function Heading({ variant, color, children }: HeadingProps) {
  const { headingClass, customStyles }: GetHeadingProps = HeadingVariant({
    variant,
  });

  return (
    <p className={`${headingClass} ${color}`} style={{ ...customStyles }}>
      {children}
    </p>
  );
}

export default Heading;

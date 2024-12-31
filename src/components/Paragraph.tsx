import React from "react";

import { ParagraphVariant } from "@/theme/themeProvider";
import { GetParagraphyProps, ParagraphProps } from "@/theme/types";

function Paragraph({ variant, color, children }: ParagraphProps) {
  const { paragraphClass, customStyles }: GetParagraphyProps = ParagraphVariant(
    {
      variant,
    }
  );

  return (
    <p
      className={`${paragraphClass} ${color} h-auto flex flex-wrap`}
      style={{ ...customStyles }}
    >
      {children}
    </p>
  );
}

export default Paragraph;

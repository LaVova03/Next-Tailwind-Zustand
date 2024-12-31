"use client";

import React, { ChangeEvent, useState } from "react";
import Image from "next/image";

import { InputTypography, InputVariant } from "@/theme/themeProvider";
import { InputProps, Variant } from "@/theme/types";

import SmileIcon from "@/assets/icons/inputSmile.svg";

const maxLength = 300;

function Input({ variant = "First", typography, onChange, value }: InputProps) {
  const [isSmile, setSmile] = useState(true);

  const placeholders: Record<Variant, string> = {
    First: "|  Почніть писати...",
    Second: "Почніть писати...",
    Third: "Кешбек (%)",
    Fourth: "5-10 символів",
  };

  const classTypography = InputTypography(typography);
  const classVariant = InputVariant(variant);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    if (e.target.value) {
      setSmile(false);
    } else {
      setSmile(true);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (onChange) {
      onChange(e);
    }
  };

  return variant !== "Second" ? (
    <div className="relative">
      {variant === "First" && isSmile ? (
        <div className="absolute h-5 w-5 left-2 top-1/2 -translate-y-1/2">
          <Image src={SmileIcon} alt="logo" fill />
        </div>
      ) : null}
      <input
        className={`${classTypography} ${classVariant}`}
        placeholder={placeholders[variant as Variant]}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  ) : (
    <div className="relative">
      <textarea
        className={`${classTypography} ${classVariant} resize-none`}
        placeholder={placeholders[variant as Variant]}
        maxLength={maxLength}
        value={value}
        onChange={handleChange}
      />
      <div className={`${classTypography} absolute bottom-2 right-2`}>{`${
        value ? value.length : 0
      } / ${maxLength}`}</div>
    </div>
  );
}

export default Input;

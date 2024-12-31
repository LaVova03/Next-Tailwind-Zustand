import { ButtonProps, HeadingProps, InputProps, ParagraphProps } from "./types";

export function ButtonTypography(typography: ButtonProps["typography"]) {
  let buttonClass = "";

  switch (typography) {
    case "Button1":
      buttonClass = "font-bold text-[49px]";
      break;
    case "Button2-Light":
      buttonClass = "font-light text-[18px]";
      break;
    case "Button2-Regular":
      buttonClass = "font-regular text-[18px]";
      break;
    case "Button2-Bold":
      buttonClass = "font-bold text-[18px]";
      break;
    case "Button3":
      buttonClass = "font-bold text-[16px]";
      break;
    case "Button4":
      buttonClass = "font-semibold text-[14px]";
      break;
    case "Button5":
      buttonClass = "font-regular text-[12px]";
      break;
    default:
      buttonClass = "font-normal text-[16px]";
      break;
  }

  return buttonClass;
}

export function ButtonVariant(variant: ButtonProps["variant"]) {
  let buttonClass = "";
  const baseClass = `w-auto h-auto rounded-[40px] pt-[10px] pr-[28px] pb-[10px] pl-[28px] gap-[8px]`;

  switch (variant) {
    case "Enter":
    case "Send":
      buttonClass =
        "w-auto h-auto rounded-[40px] pt-[10px] pr-[30px] pb-[10px] pl-[30px] gap-[10px] bg-accent_primary";
      break;
    case "Cancel":
      buttonClass = `${baseClass} bg-icons_dark`;
      break;
    case "Apply":
      buttonClass = `${baseClass} bg-accent_primary`;
      break;
    case "Scan":
      buttonClass =
        "w-[163px] h-[48px] rounded gap-[4px] border-2 border-icons_gray shadow-gradients_primary";
      break;
    case "Create":
      buttonClass =
        "w-[163px] h-[48px] rounded gap-[4px] bg-accent_primary shadow-gradients_primary]";
      break;
    case "ApplyLarge":
      buttonClass =
        "w-[464px] h-[64px] rounded gap-[10px] bg-accent_primary shadow-gradients_primary";
      break;
    case "CancelLarge":
      buttonClass =
        "w-[464px] h-[64px] rounded gap-[10px] bg-secondary_dark shadow-gradients_primary";
      break;
    case "Return":
      buttonClass = "w-[442px] h-[31px] text-accent_primary underline";
      break;
    default:
      buttonClass = `${baseClass} bg-accent_primary`;
      break;
  }

  return buttonClass;
}

export function InputTypography(typography: InputProps["typography"]) {
  let inputClass = "";

  switch (typography) {
    case "Input1":
      inputClass = "font-bold text-[18px]";
      break;
    case "Input2":
      inputClass = "font-light text-[16px]";
      break;
    default:
      inputClass = "font-normal text-[16px]";
      break;
  }

  return inputClass;
}

export function InputVariant(variant: InputProps["variant"]) {
  const baseClass =
    "w-full bg-secondary_main flex justify-center items-center outline-none gap-[10px] rounded";

  let customClass = "";

  switch (variant) {
    case "First":
      customClass =
        "h-[38px] pr-[16px]  pl-[35px] bg-no-repeat bg-[length:20px_20px] bg-[position:8px_center]";
      break;
    case "Second":
      customClass = "h-[80px] p-[8px]";
      break;
    case "Third":
      customClass = "h-[35px] p-[8px]";
      break;
    case "Fourth":
      customClass = "h-[35px] p-[8px]";
      break;
    default:
      customClass = "h-[38px] p-[8px]";
      break;
  }

  return `${baseClass} ${customClass}`;
}

export function HeadingVariant({ variant }: HeadingProps) {
  let headingClass = "";
  let customStyles = {};

  switch (variant) {
    case "H1":
      headingClass = "font-bold text-[64px]";
      customStyles = {
        letterSpacing: "-3%",
      };
      break;
    case "H2-ExtraBold":
      headingClass = "font-extrabold text-[54px]";
      customStyles = {
        lineHeight: "135%",
      };
      break;
    case "H2-Regular":
      headingClass = "font-regular text-[54px]";
      break;
    case "H3-Bold":
      headingClass = "font-bold text-[36px]";
      break;
    case "H4":
      headingClass = "font-semibold text-[32px]";
      break;
    case "H5":
      headingClass = "font-bold text-[25px]";
      customStyles = {
        letterSpacing: "-4%",
        lineHeight: "126%",
      };
      break;
    default:
      headingClass = "font-normal text-[16px]";
      break;
  }

  return { headingClass, customStyles };
}

export function ParagraphVariant({ variant }: ParagraphProps) {
  let paragraphClass = "";
  let customStyles = {};

  switch (variant) {
    case "P1":
      paragraphClass = "font-semibold text-[24px]";
      customStyles = {
        letterSpacing: "-4%",
        lineHeight: "140%",
      };
      break;
    case "P2":
      paragraphClass = "font-medium text-[21px]";
      break;
    case "P3":
      paragraphClass = "font-medium text-[19px]";
      break;
    case "P4-Bold":
      paragraphClass = "font-bold text-[16px]";
      customStyles = {
        lineHeight: "-24%",
      };
      break;
    case "P4-Regular":
      paragraphClass = "font-regular text-[16px]";
      customStyles = {
        lineHeight: "-24%",
      };
      break;
    case "P5":
      paragraphClass = "font-regular text-[14px]";
      customStyles = {
        letterSpacing: "-6%",
        lineHeight: "160%",
      };
      break;
    case "P6-Regular":
      paragraphClass = "font-regular text-[12px]";
      break;
    case "P6-SemiBold":
      paragraphClass = "font-semibold text-[12px]";
      break;
    default:
      paragraphClass = "font-normal text-[16px]";
      break;
  }

  return { paragraphClass, customStyles };
}

export enum Styles {
  AdvantagesLi = "w-auto h-auto gap-[10px] flex flex-row",
  Underline = "h-[40px] flex items-center gap-6 cursor-pointer border-b-2 border-b-transparent hover:border-b-2 hover:border-b-icons_mainBtn active:border-b-icons_mainBtn transition-colors duration-300 ease-in-out",
  Button = "border-none text-[18px] text-text_gray hover:text-accent_primary focus:text-accent_primary transition-colors duration-300 ease-in-out",
  Input = "border-none focus:outline-none text-text_white bg-inherit",
}

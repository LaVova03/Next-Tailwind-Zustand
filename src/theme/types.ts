export interface ButtonProps {
  variant: string;
  typography?: string;
  children?: React.ReactNode;
  icon?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface InputProps {
  variant?: string;
  typography?: "Input1" | "Input2";
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export type Variant = "First" | "Second" | "Third" | "Fourth";

export interface HeadingProps {
  variant: string;
  children?: React.ReactNode;
  color?: string;
}

export interface ParagraphProps {
  variant: string;
  children?: React.ReactNode;
  color?: string;
}

export interface CustomStyleProps {
  letterSpacing?: string;
  lineHeight?: string;
}

export interface GetHeadingProps {
  headingClass: string;
  customStyles: CustomStyleProps;
}

export interface GetParagraphyProps {
  paragraphClass: string;
  customStyles: CustomStyleProps;
}

import { ReactNode } from "react";
import { Footer } from "../../../components/Footer";
import { HeaderUser } from "../../../components/Header/HeaderUser";

interface IProductPageTemplateProps {
  children: ReactNode;
}

export const ProductPageTemplate = ({ children }: IProductPageTemplateProps) => {
  return (
    <>
      <HeaderUser />
      {children}
      <Footer />
    </>
  );
};

import { ReactNode } from "react";
import { Footer } from "../../../components/Footer";
import { HeaderUser } from "../../../components/Header/HeaderUser";

interface IHomeTemplateProps {
  children: ReactNode;
}

export const HomeTemplate = ({ children }: IHomeTemplateProps) => {
  return (
    <>
      <HeaderUser />
      {children}
      <Footer />
    </>
  );
};

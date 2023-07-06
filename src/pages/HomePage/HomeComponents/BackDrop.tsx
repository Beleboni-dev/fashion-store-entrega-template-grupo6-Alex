import { StyledBackdrop } from "../StyledComponents/StyledBackDrop";

interface BackdropProps {
  onClick: () => void;
}

export const Backdrop = ({ onClick }: BackdropProps) => {
  return <StyledBackdrop onClick={onClick} />;
};
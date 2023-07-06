import styled from "styled-components";

export const StyledHeaderUser = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 97vw;
  max-width: 1448px;
  margin: 0 auto;
  padding: 1.875rem;
  background-color: var(--Color-White);
  color: var(--Color-Black);
  position: relative;
  div{
    border-radius: 30%;
    padding: 4px 8px;
    background-color: var(--Color-Grey);
    position: absolute;
    right: 12px;
    top: 18px;
    
    span{
      color: var(--Color-Black);
    }
  }
`;

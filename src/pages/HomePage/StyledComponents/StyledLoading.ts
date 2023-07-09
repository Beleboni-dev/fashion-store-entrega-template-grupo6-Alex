import styled from 'styled-components';
;

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; 

  .tv-loader {
    width: 50px; 
    height: 50px; 
    position: relative;
  }

  .tv-loader-screen {
    width: 100%;
    height: 100%;
    background-color: #33333370;
    border-radius: 50%;
    animation: tv-loading 1.5s infinite ease-in-out;
  }

  @keyframes tv-loading {
    0% {
      transform: scale(0.4);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.4);
    }
  }
`;

import { HomeTemplate } from "./HomeComponents/HomeTemplate";
import { StyledHomePage } from "./style";
import homeMax from "../../assets/img/homemax.png";
import { ProductList } from "./HomeComponents/ProductsList";
export const HomePage = () => {
  return (
    <HomeTemplate>
      <StyledHomePage>
        <section>
          <div>
            <img src={homeMax} alt="banner" />
          </div>
          <div>
            <h1>kenzie fashion store</h1>
            <button>Confira as ofertas</button>
          </div>
        </section>
    <ProductList />
      </StyledHomePage>
    </HomeTemplate>
  );
};

import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"


const Container = styled.div`
  
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 25px 0px;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 45px;
`;

const FilterContainer = styled.div`
  width: 70%;
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;  
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
 `;

const FilterValues = styled.select`
  margin-left: 10px;
  padding: 5px;
 `;

const FilterOption = styled.option`
  font-weight: 200;
 `;

const AddContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;  
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #99004d;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 3px solid #99004d;
  background-color: #ffe6f3;
  cursor: pointer;
  font-weight: 600;

  &:hover{
    background-color: #ffb3da;
  }
`;

const Product = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
          <ImageContainer>
            <Image src="https://www.nicepng.com/png/detail/362-3620165_shalad-ice-cream-3d-png.png"/>
          </ImageContainer>

          <InfoContainer>
            <Title>Chocolate Ice Cream</Title>
            <Desc>
              Chocolate ice cream is a flavour of ice cream which is teh second most common
              flavour of ice cream, after vanila. Chocolate ice cream is made by blending
              in cocoa powder in along wif teh eggs (optional), cream, vanila and sugar used
              to make ice cream a brown colour. Chocolate ice cream is used in teh creation
              of other flavours, such as rock road.                           
            </Desc>
            <Price> Rs. 150</Price>
            <FilterContainer>
            <Filter>
                <FilterTitle>Toppings :</FilterTitle>
                  <FilterValues>
                    <FilterOption>Hot Fudge</FilterOption>
                    <FilterOption>Sprinkles</FilterOption>
                    <FilterOption>Caramel</FilterOption>
                    <FilterOption>Oreos</FilterOption>
                    <FilterOption>Cookie Dough</FilterOption>
                    <FilterOption>Whipped Cream</FilterOption>
                    <FilterOption>Hard Chocolate Coating</FilterOption>
                    <FilterOption>Melted Marshmallow</FilterOption>
                  </FilterValues>
            </Filter>
              
            <Filter>
              <FilterTitle>Size :</FilterTitle>
                <FilterValues>
                  <FilterOption>100 ml</FilterOption>
                  <FilterOption>150 ml</FilterOption>
                  <FilterOption>200 ml</FilterOption>
                  <FilterOption>300 ml</FilterOption>
                  <FilterOption>400 ml</FilterOption>
                </FilterValues>
            </Filter>

            </FilterContainer>

            <AddContainer>
              <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>

          </InfoContainer>
        </Wrapper>

        <Newsletter/>
        <Footer/>

    </Container>
  )
}

export default Product;
import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';


const Container = styled.div`
`;

const Wrapper = styled.div`
    padding: 20px;    
`;

const Title = styled.h1`
    font-weight: 400;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 500;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    Color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
`;

const TopText = styled.span`
    text-decoration: underline;
    font-weight: 400;
    cursor: pointer;
    margin: 0px 10px;
`;


const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;    
`;

const Product = styled.div`
    display: flex;
    justify-content:space-between;
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
 
const ProductName = styled.span`
`;

const ProductID = styled.span`
`;

const ProductTopping = styled.span`
`;

const ProductSize = styled.span`
`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;    
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 300;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 300;
`;

const SummaryItem = styled.div`
    margin: 25px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "600"};
    font-size: ${props => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
    
`;

const SummaryItemPrice = styled.span`
    
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Cart = () => {
  return (      
    <Container>
        <Announcement/>
        <Navbar/>

        <Wrapper>
            <Title>YOUR BASKET</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Basket(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://thumbs.dreamstime.com/b/scoop-vanilla-ice-cream-vanilla-beans-high-angle-still-life-single-served-white-background-bean-pods-fresh-leaf-88887157.jpg"/>
                            <Details>
                                <ProductName><b>Product: </b>VANILA ICE CREAM</ProductName>
                                <ProductID><b>ID: </b>34657891</ProductID>
                                <ProductTopping><b>Topping: </b>Caramel</ProductTopping>
                                <ProductSize><b>Size: </b>100 ml</ProductSize>
                            </Details>
                        </ProductDetail>

                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>Rs. 150</ProductPrice>
                        </PriceDetail>

                    </Product>

                    <Hr/>

                    <Product>
                        <ProductDetail>
                            <Image src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/5/14/1/FNM_060114-Hot-Fudge-Sauce-Recipe_s4x3.jpg.rend.hgtvcom.406.305.suffix/1400169222272.jpeg"/>
                            <Details>
                                <ProductName><b>Product: </b> CHOCOLATE ICE CREAM</ProductName>
                                <ProductID><b>ID: </b>46657853</ProductID>
                                <ProductTopping><b>Topping: </b>Caramel</ProductTopping>
                                <ProductSize><b>Size: </b>200 ml</ProductSize>
                            </Details>
                        </ProductDetail>

                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>Rs. 250</ProductPrice>
                        </PriceDetail>

                    </Product> 


                </Info>

                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice> Rs. 400</SummaryItemPrice>
                    </SummaryItem>
                    
                    <SummaryItem>
                        <SummaryItemText>Estimated Delivery</SummaryItemText>
                        <SummaryItemPrice> Rs. 60</SummaryItemPrice>
                    </SummaryItem>
                    
                    <SummaryItem>
                        <SummaryItemText>Delivery Discount</SummaryItemText>
                        <SummaryItemPrice> Rs. -10</SummaryItemPrice>
                    </SummaryItem>
                    
                    <SummaryItem type='total'>
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice> Rs. 450</SummaryItemPrice>
                    </SummaryItem>

                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>

        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Cart;
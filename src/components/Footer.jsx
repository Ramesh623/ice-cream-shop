import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column"})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none"})}
`;

const Title =styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    margin-left: 10px;    
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Mr. Ice Cream</Logo>
            <Desc>Moved waters rule gathering Make cattle 
                signs. Forth hath very morning, in so For. 
                Forth had shall whales male teh saw life For, every form given dry darkness after one.
                Moving great signs kind which wherein she'd very darkness saw saw, 
                for meat divide TEMPyou're may days shall.</Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook/>    
                </SocialIcon>

                <SocialIcon color='E4405F'>
                    <Instagram/>                    
                </SocialIcon>

                <SocialIcon color='55ACEE'>
                    <Twitter/>
                </SocialIcon>

                <SocialIcon color='E60023'>
                    <Pinterest/>
                </SocialIcon>

            </SocialContainer>

        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Choco Lovers</ListItem>
                <ListItem>Fruits Lovers</ListItem>
                <ListItem>Kids Special</ListItem>
                <ListItem>Young Special</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"5px"}}/>NO:45, New Shopping Comple, Kurunegala</ContactItem>
            <ContactItem><Phone style={{marginRight:"5px"}}/>037 22 22 000</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"5px"}}/>mricecream@gamil.com</ContactItem>
            <Payment src="https://dogsonthestreets.org/wp-content/uploads/2021/07/payment-Capture.jpg"/>                
        </Right>

    </Container>
    
  )
}

export default Footer;
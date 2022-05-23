import { Send } from '@mui/icons-material';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 60vh;
  background-color: hsl(38, 73%, 93%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 25px;
`;

const Desc = styled.div`
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 25px;
  ${mobile({ textAlign: "center"})}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color:antiquewhite;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
  ${mobile({ width: "80%"})}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
            <Input placeholder='Your email address'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>

    </Container>
  )
}

export default Newsletter
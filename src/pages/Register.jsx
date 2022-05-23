import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://www.blendernation.com/wp-content/uploads/2019/09/image11-1.jpg");
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  ${mobile({ width: "75%"})}
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-weight: 400;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  font-weight: 300;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #99004d;
  color: white;
  cursor: pointer;
  margin-left:30%;
  font-weight: 500;
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>

                <Input placeholder='name'/>
                <Input placeholder='last name'/>
                <Input placeholder='username'/>
                <Input placeholder='email'/>
                <Input placeholder='password'/>
                <Input placeholder='confirm password'/>
    
                <Agreement>
                    By creating an account, I constent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>

                <Button>CREATE</Button>
            </Form>
        </Wrapper>

    </Container>
  )
}

export default Register;
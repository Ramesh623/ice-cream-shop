import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color:  rgb(168, 16, 79);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 900;
`;


const Announcement = () => {
  return (
    <Container>
        ANNOUNCEMENT
    </Container>
  )
}

export default Announcement;
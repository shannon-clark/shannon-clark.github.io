import Head from 'next/head'
import styled from 'styled-components';

const HomepageContainer = styled.div`
  display: flex;
  height: calc(100vh - 65px);
  overflow: hidden;
  padding-top: 65px;
  align-items: center;
  justify-content: center;
  
`;

const TextContainer = styled.div`
  font-size: 2rem; 
  font-weight: bold; 
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text}; 
`;

const Image = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  height: 100%;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: calc(100vh - 55px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  bottom: 0px;
`;

export default function Home() {
  return (
  <div>
      <Head>
        <title>Shannon Clark | Home</title>
      </Head>

      <HomepageContainer>
        <TextContainer>Hi, I'm Shannon.</TextContainer>
           
          
          
          
      </HomepageContainer>
    </div>
  )
}

import Head from 'next/head'
import styled from 'styled-components';

const HomepageContainer = styled.div`
  display: flex;
  height: calc(100vh - 65px);
  overflow: hidden;
  padding-top: 65px;
  
`;

const TextContainer = styled.div`
  font-size: 3rem; 
  font-weight: bold; 
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text}; 
  margin: 3rem 0; 
  margin-left: 100px;
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
        <Image>
          <StyledImage src="/photo.svg" alt="Shannon Clark" />
        </Image>
           
          
          
          
      </HomepageContainer>
    </div>
  )
}

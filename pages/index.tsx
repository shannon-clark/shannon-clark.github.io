import Head from "next/head";
import styled from "styled-components";

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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shannon Clark | Home</title>
      </Head>

      <HomepageContainer>
        <TextContainer>Hi, I&apos;m Shannon.</TextContainer>
      </HomepageContainer>
    </div>
  );
}

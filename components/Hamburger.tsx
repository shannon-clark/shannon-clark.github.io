import { ReactNode, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";


// interface HamburgerProps {
//     children: ReactNode;
//   }
const HamburgerContainer = styled.div`
    margin-right: 20
`;

export const HamburgerIcon= () => {
    return (
        <HamburgerContainer>
            <FontAwesomeIcon
                size="xl"
                icon={faBars} 
                color="white"
            />
        </HamburgerContainer>
    );
};




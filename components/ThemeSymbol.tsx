import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as faCircleFilled } from "@fortawesome/free-solid-svg-icons/faCircle";
import styled from "styled-components";
import { useDarkMode } from 'next-dark-mode'


  
const ThemeSymbolContainer = styled.div`
    margin-right: 10px
    margin-left: 20px
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.text};
    &:before {
        color: "${({ theme }) => theme.text}"
    }
    &:hover,
    &:focus {
        color: ${({ theme }) => theme.hovered};
    }
`;


export const ThemeSymbol = () => {
    const {
        autoModeActive,    // boolean - whether the auto mode is active or not
        autoModeSupported, // boolean - whether the auto mode is supported on this browser
        darkModeActive,    // boolean - whether the dark mode is active or not
        switchToAutoMode,  // function - toggles the auto mode on
        switchToDarkMode,  // function - toggles the dark mode on
        switchToLightMode, // function - toggles the light mode on
      } = useDarkMode()
    
    return (
        <ThemeSymbolContainer>
            { darkModeActive ? (
                <StyledFontAwesomeIcon
                    onClick={() => { 
                        switchToLightMode();
                    }}
                    style={{ zIndex: 115, cursor: "pointer" }}
                    size="lg"
                    icon={faCircle} 
                />
            ):
                <StyledFontAwesomeIcon
                    onClick={() => { 
                        switchToDarkMode();
                    }}
                    style={{ zIndex: 115, cursor: "pointer" }}
                    size="lg"
                    icon={faCircleFilled} 
                />
            }    
        </ThemeSymbolContainer>

    );
};




import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as faCircleFilled } from "@fortawesome/free-solid-svg-icons/faCircle";
import styled from "styled-components";
import { useTheme } from "next-themes";

const ThemeSymbolContainer = styled.div`
  margin-right: 10px;
  margin-left: 20px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.text};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.hovered};
  }
`;

export const ThemeSymbol = () => {
  const { theme, setTheme } = useTheme();
  const darkModeActive = theme === "dark";
  console.log(theme);

  return (
    <ThemeSymbolContainer>
      {darkModeActive ? (
        <StyledFontAwesomeIcon
          onClick={() => {
            setTheme("light");
          }}
          style={{ zIndex: 115, cursor: "pointer" }}
          size="lg"
          icon={faCircle}
        />
      ) : (
        <StyledFontAwesomeIcon
          onClick={() => {
            setTheme("dark");
          }}
          style={{ zIndex: 115, cursor: "pointer" }}
          size="lg"
          icon={faCircleFilled}
        />
      )}
    </ThemeSymbolContainer>
  );
};

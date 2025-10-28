// styled.d.ts

import "styled-components";
import { ThemeProps } from "./components/ThemeConfig";

declare module "styled-components" {
  // Use the interface name you imported
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeProps {}
}

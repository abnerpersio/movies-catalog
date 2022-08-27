import 'styled-components';

type Pallete = {
  100?: string;
  200?: string;
  300: string;
  500: string;
  700?: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    text: string;
    colors: {
      primary: Pallete;
      secondary: string;
      dark: Pallete;
      light: string;
      gray: string;
    };
  }
}

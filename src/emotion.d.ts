import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      primary_light: string;
      black: string;
      white: string;
      gray: string;
      gray_light: string;
    };
  }
}

import { GradientType } from "./Gradient.types";

export const chooseType = (type: GradientType) => {
  switch (type) {
    case 'black':
      return {
        sx: 0,
        sy: 1,
        ex: 0.5,
        ey: 0.2,
        color1: '#23262B',
        color2: '#373B45'
      };
    case 'black2':
      return {
        sx: 0,
        sy: 1,
        ex: -0.5,
        ey: -0.5,
        color1: '#23262B',
        color2: '#373B45'
      };
    case 'primary':
      return {
        sx: 0,
        sy: 1,
        ex: 0.66,
        ey: 1,
        color1: '#D943F8',
        color2: '#884EF7'
      };
    case 'secondary':
      return {
        sx: 0.5,
        sy: 0,
        ex: 0.5,
        ey: 1,
        color1: '#4355F8',
        color2: '#54CEF5'
      };
    case 'green':
      return {
        sx: 0.5,
        sy: 0,
        ex: 0.5,
        ey: 1,
        color1: '#67F843',
        color2: '#54F5F5'
      };
    default:
      return {
        sx: 0,
        sy: 1,
        ex: -0.5,
        ey: -0.5,
        color1: '#23262B',
        color2: '#373B45'
      };
  }
};

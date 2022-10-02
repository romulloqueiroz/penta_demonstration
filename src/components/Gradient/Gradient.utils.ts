import { GradientType } from "./Gradient.types";
import { gradient } from '@styles';

export const chooseType = (type: GradientType) => {
  switch (type) {
    case 'black':
      return {
        sx: 0,
        sy: 1,
        ex: 0.5,
        ey: 0.2,
        color1: gradient.black[0],
        color2: gradient.black[1]
      };
    case 'black2':
      return {
        sx: 0,
        sy: 1,
        ex: -0.5,
        ey: -0.5,
        color1: gradient.black[0],
        color2: gradient.black[1]
      };
    case 'primary':
      return {
        sx: 0,
        sy: 1,
        ex: 0.66,
        ey: 1,
        color1: gradient.primary[0],
        color2: gradient.primary[1]
      };
    case 'secondary':
      return {
        sx: 0.5,
        sy: 0,
        ex: 0.5,
        ey: 1,
        color1: gradient.secondary[0],
        color2: gradient.secondary[1]
      };
    case 'green':
      return {
        sx: 0.5,
        sy: 0,
        ex: 0.5,
        ey: 1,
        color1: gradient.green[0],
        color2: gradient.green[1]
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

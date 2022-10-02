import React from 'react';
import { ViewType } from '@styles';

export type GradientType = 'black' | 'black2' | 'primary' | 'secondary' | 'green';

export interface GradientProps extends ViewType {
  children: React.ReactNode;
  type?: GradientType;
}

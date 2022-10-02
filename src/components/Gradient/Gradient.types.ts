import React from 'react';
import { ViewType, GradientType } from '@styles';

export interface GradientProps extends ViewType {
  children: React.ReactNode;
  type?: GradientType;
}

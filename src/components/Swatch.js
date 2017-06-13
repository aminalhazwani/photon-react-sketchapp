/* @flow */
import React from 'react';
import { View } from 'react-sketchapp';
import AccessibilityBadge from './AccessibilityBadge';
import Label from './Label';
import type { Color } from '../processColor';

const SWATCH_WIDTH = 48;

type P = {
  name: string,
  color: Color,
};
const Swatch = ({ color, name }: P) => (
  <View name={name} 
    style={{
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    }}
  >
    <View
      style={{
        width: SWATCH_WIDTH,
        height: SWATCH_WIDTH,
        backgroundColor: color.hex,
        borderRadius: 4,
        marginRight: 12,
      }}
    />
    <Label bold>{name}</Label>
    <Label>{color.hex}</Label>
    <AccessibilityBadge level={color.accessibility} />
  </View>
);

export default Swatch;

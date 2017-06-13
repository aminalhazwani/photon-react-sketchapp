/* @flow */
import React from 'react';
import { View } from 'react-sketchapp';
import SwatchRow from './Swatch';

const SWATCH_WIDTH = 100;

type P = {
  colors: any,
};
const Palette = ({ colors }: P) => (
  <View
    style={{
      width: (SWATCH_WIDTH + 48) * 4,
    }}
  >
    {Object.keys(colors).map(name => <SwatchRow color={colors[name]} name={name} />)}
  </View>
);

export default Palette;

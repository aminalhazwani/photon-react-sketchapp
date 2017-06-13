import processColor from './processColor';
import type { Color } from './processColor';

export const colors = {
  'Magenta 50': '#ff1ad9',
  'Magenta 60': '#ed00b5',
  'Magenta 70': '#b5007f',
  'Magenta 80': '#7d004f',
  'Magenta 90': '#440027',
  'Purple 50': '#9400ff',
  'Purple 60': '#8000d7',
  'Purple 70': '#6200a4',
  'Purple 80': '#440071',
  'Purple 90': '#25003e',
  'Blue 50': '#0a84ff',
  'Blue 60': '#0060df',
  'Blue 70': '#003eaa',
  'Blue 80': '#002275',
  'Blue 90': '#000f40',
  'Teal 50': '#00feff',
  'Teal 60': '#00c8d7',
  'Teal 70': '#008ea4',
  'Teal 80': '#005a71',
  'Teal 90': '#002d3e',
  'Green 50': '#30e60b',
  'Green 60': '#12bc00',
  'Green 70': '#058b00',
  'Green 80': '#006504',
  'Green 90': '#003706',
  'Yellow 50': '#ffe900',
  'Yellow 60': '#d7b600',
  'Yellow 70': '#a47f00',
  'Yellow 80': '#715100',
  'Yellow 90': '#3e2800',
  'Red 50': '#ff0039',
  'Red 60': '#d70022',
  'Red 70': '#a4000f',
  'Red 80': '#5a0002',
  'Red 90': '#3e0200',
  'Grey 10': '#f9f9fa',
  'Grey 30': '#d7d7db',
  'Grey 50': '#737373',
  'Grey 70': '#4a4a4f',
  'Grey 90': '#0c0c0d',
  'Ink 70': '#363959',
  'Ink 80': '#202340',
  'Ink 90': '#0f1126',
};

const typeSizes = [80, 48, 36, 24, 20, 16];

export const spacing = 16;

const fontFamilies = {
  display: 'Helvetica',
  body: 'Georgia',
};

const fontWeights = {
  regular: 'regular',
  bold: 'bold',
};

export const fonts = {
  Headline: {
    color: colors.Night,
    fontSize: typeSizes[0],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 80,
  },
  'Title 1': {
    color: colors.Night,
    fontSize: typeSizes[2],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 48,
  },
  'Title 2': {
    color: colors.Night,
    fontSize: typeSizes[3],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 36,
  },
  'Title 3': {
    color: colors.Night,
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
  },
  Body: {
    color: colors.Night,
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
    marginBottom: 24,
  },
};

export default {
  colors: Object.keys(colors).reduce(
    (acc, name) => ({
      ...acc,
      [name]: processColor(colors[name]),
    }),
    {},
  ),
  fonts,
  spacing,
};

export type DesignSystem = {
  fonts: any,
  colors: { [key: string]: Color },
};

import { blue, yellow, blackA, slate, sky } from '@radix-ui/colors';

const colors = {
  'ds-color__primary': '$ds-color__primary-09',
  'ds-color__highlight-01': yellow.yellow1,
  'ds-color__highlight-09': yellow.yellow9,
  'ds-color__highlight-10': yellow.yellow10,
  'ds-color__highlight-11': yellow.yellow11,
  'ds-color__highlight-12': yellow.yellow12,

  'ds-color__primary-01': blue.blue1,
  'ds-color__primary-02': blue.blue2,
  'ds-color__primary-03': '$ds-color__highlight-09',
  'ds-color__primary-04': '$ds-color__highlight-10',
  'ds-color__primary-05': blue.blue5,
  'ds-color__primary-06': blue.blue6,
  'ds-color__primary-07': blue.blue7,
  'ds-color__primary-08': blue.blue8,
  'ds-color__primary-09': blue.blue9,
  'ds-color__primary-10': blue.blue10,
  'ds-color__primary-11': yellow.yellow12,
  'ds-color__primary-12': blue.blue12,

  'ds-color__text__low-contrast': slate.slate11,
  'ds-color__text__high-contrast': slate.slate12,

  'ds-color__background-app': '$ds-color__primary-02',
  'ds-color__background-element': 'white',

  'ds-color__gray-03': slate.slate3,
  'ds-color__gray-06': slate.slate6,
  'ds-color__gray-08': slate.slate8,
  'ds-color__gray-11': slate.slate11,

  'ds-color__blackA-05': blackA.blackA5,
  'ds-color__blackA-07': blackA.blackA7,
  'ds-color__blackA-12': blackA.blackA12,

  'ds-color__primary-gradient': `19deg, $ds-color__primary-09 0%, ${sky.sky9} 100%`
};

export const meiFacilTokens = {
  colors: { ...colors },
  shadows: {
    'ds-shadow__input__normal': `0 0 0 1px ${colors['ds-color__primary-07']}`,
    'ds-shadow__input__focused': `0 0 0 2px ${colors['ds-color__primary-08']}`,
    'ds-shadow__select__normal': `0 2px 10px ${colors['ds-color__blackA-07']}`,
    'ds-shadow__select__focused': `0 0 0 2px ${colors['ds-color__primary-09']}`,
    'ds-shadow__select-content': `0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)`,
    'ds-shadow__tab-root': `0 2px 10px ${colors['ds-color__blackA-05']}`,
    'ds-shadow__tab__active':
      'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
    'ds-shadow__tab__active__focused': `0 0 0 2px ${colors['ds-color__primary-11']}`,
    'ds-shadow__tab-content__focused': `0px 0px 0px 2px ${colors['ds-color__primary-11']}`,

    'ds-shadow__button__focused': `0 0 0 2px ${colors['ds-color__primary-07']}`
  },
  spaces: {
    'ds-space-01': '5px',
    'ds-space-02': '10px',
    'ds-space-03': '15px',
    'ds-space-04': '20px',
    'ds-space-05': '25px'
  },
  fonts: {
    'ds-font-family__heading': 'Inter',
    'ds-font-family__text': 'Inter'
  },
  fontSizes: {
    'ds-font-size__small': '13px',
    'ds-font-size__medium': '15px',
    'ds-font-size__large': '25px',
    'ds-font-size__huge': '60px'
  },
  lineHeights: {
    'ds-line-height__normal': 1,
    'ds-line-height__large': 1.5
  },
  radii: {
    'ds-radii__extra-small': '0px',
    'ds-radii__small': '0px',
    'ds-radii__medium': '0px',
    'ds-radii__large': '0px',

    'ds-radii__switcher-label': '$ds-radii__large 0 0 $ds-radii__extra-small',
    'ds-radii__switcher-trigger': '0 $ds-radii__large $ds-radii__large 0',
    'ds-radii__tab':
      '$ds-radii__large $ds-radii__large $ds-radii__large $ds-radii__extra-small',
    'ds-radii__tab-trigger': '$ds-radii__large',
    'ds-radii__tab-content': '0 0 $ds-radii__large $ds-radii__extra-small'
  },
  transitions: {
    'ds-transition__default': '.3s ease',
    'ds-transition__fast': '.1s ease'
  }
};

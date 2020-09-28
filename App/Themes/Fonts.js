import {Scale} from '../Transforms';

const type = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black',
  emphasis: 'HelveticaNeue-Italic',
};

const size = {
  xl3: Scale(23),
  xl2: Scale(21),
  xl: Scale(19),
  large: Scale(17),
  medium: Scale(15),
  small: Scale(13),
  tiny: Scale(11),
};

const style = {
  textUppercase: {
    textTransform: 'uppercase',
  },

  xl3: {
    fontFamily: type.base,
    fontSize: size.xl3,
  },
  xl2: {
    fontFamily: type.base,
    fontSize: size.xl2,
  },
  xl: {
    fontFamily: type.base,
    fontSize: size.xl,
  },
  large: {
    fontFamily: type.base,
    fontSize: size.large,
  },
  medium: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  small: {
    fontFamily: type.base,
    fontSize: size.small,
  },
  tiny: {
    fontFamily: type.base,
    fontSize: size.tiny,
  },
  xl3Bold: {
    fontFamily: type.bold,
    fontSize: size.xl3,
    fontWeight: 'bold',
  },
  xl2Bold: {
    fontFamily: type.bold,
    fontSize: size.xl2,
    fontWeight: 'bold',
  },
  xlBold: {
    fontFamily: type.bold,
    fontSize: size.xl,
    fontWeight: 'bold',
  },
  largeBold: {
    fontFamily: type.bold,
    fontSize: size.large,
    fontWeight: 'bold',
  },
  mediumBold: {
    fontFamily: type.bold,
    fontSize: size.medium,
    fontWeight: 'bold',
  },
  smallBold: {
    fontFamily: type.bold,
    fontSize: size.small,
    fontWeight: 'bold',
  },
  tinyBold: {
    fontFamily: type.bold,
    fontSize: size.tiny,
    fontWeight: 'bold',
  },
};

export default {
  type,
  size,
  style,
};

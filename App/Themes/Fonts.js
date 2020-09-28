import Colors from './Colors';

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
    color: Colors.black,
  },
  xl2: {
    fontFamily: type.base,
    fontSize: size.xl2,
    color: Colors.black,
  },
  xl: {
    fontFamily: type.base,
    fontSize: size.xl,
    color: Colors.black,
  },
  large: {
    fontFamily: type.base,
    fontSize: size.large,
    color: Colors.black,
  },
  medium: {
    fontFamily: type.base,
    fontSize: size.medium,
    color: Colors.black,
  },
  small: {
    fontFamily: type.base,
    fontSize: size.small,
    color: Colors.black,
  },
  tiny: {
    fontFamily: type.base,
    fontSize: size.tiny,
    color: Colors.black,
  },
  xl3Bold: {
    fontFamily: type.bold,
    fontSize: size.xl3,
    color: Colors.black,
    fontWeight: 'bold',
  },
  xl2Bold: {
    fontFamily: type.bold,
    fontSize: size.xl2,
    color: Colors.black,
    fontWeight: 'bold',
  },
  xlBold: {
    fontFamily: type.bold,
    fontSize: size.xl,
    color: Colors.black,
    fontWeight: 'bold',
  },
  largeBold: {
    fontFamily: type.bold,
    fontSize: size.large,
    color: Colors.black,
    fontWeight: 'bold',
  },
  mediumBold: {
    fontFamily: type.bold,
    fontSize: size.medium,
    color: Colors.black,
    fontWeight: 'bold',
  },
  smallBold: {
    fontFamily: type.bold,
    fontSize: size.small,
    color: Colors.black,
    fontWeight: 'bold',
  },
  tinyBold: {
    fontFamily: type.bold,
    fontSize: size.tiny,
    color: Colors.black,
    fontWeight: 'bold',
  },
};

export default {
  type,
  size,
  style,
};

import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';

import {Scale} from '../Transforms';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  backgroundSilver: {
    backgroundColor: Colors.silver,
  },
  backgroundSnow: {
    backgroundColor: Colors.snow,
  },
  borderTop1: {
    borderTopWidth: Scale(1),
    borderColor: Colors.silver,
  },
  borderTop2: {
    borderTopWidth: Scale(2),
    borderColor: Colors.silver,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  row: {
    flexDirection: 'row',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyEvenly: {
    justifyContent: 'space-evenly',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  positionAbsolute: {
    position: 'absolute',
  },
  shadow: {
    backgroundColor: Colors.silver,
    shadowColor: Colors.charcoal,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  shadowSmall: {
    backgroundColor: Colors.silver,
    shadowColor: Colors.charcoal,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
};

export default ApplicationStyles;

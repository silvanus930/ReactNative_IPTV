import React, { FunctionComponent } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import R from '../res/R';

type ButtonComponentProps = {
  style?: any,
};
const Gradient: FunctionComponent<ButtonComponentProps> = (props: any) => {
  const { children, style } = props;

  const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style;
  return (
    <LinearGradient
      colors={[R.colours.gradient1, R.colours.gradient2, R.colours.gradient3]}
      start={{ x: 0.112, y: 0.864 }}
      end={{ x: 0.865, y: 0.147 }}
      locations={[0.009, 0.5494, 0.979]}
      style={{ ...passedStyles }}
    >
      {children}
    </LinearGradient>
  );
};

export default Gradient;

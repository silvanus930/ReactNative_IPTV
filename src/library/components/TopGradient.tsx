import React, { FunctionComponent } from 'react';
import LinearGradient from 'react-native-linear-gradient';

type ButtonComponentProps = {
  style?: any,
};
const TopGradient: FunctionComponent<ButtonComponentProps> = (props: any) => {
  const { children, style } = props;
  const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style;
  return (
    <LinearGradient
      colors={['#7253A2', '#EE2E7F', '#fd9702']}
      start={{ x: 0.124, y: 0.485 }}
      end={{ x: 0.995, y: 0.257 }}
      locations={[0.001, 0.733, 1]}
      style={{ ...passedStyles }}
    >
      {children}
    </LinearGradient>
  );
};

export default TopGradient;

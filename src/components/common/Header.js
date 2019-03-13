import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {headerText}
      </Text>
    </View>

  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 25,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    // position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
});
// eslint-disable-next-line import/prefer-default-export
export { Header };

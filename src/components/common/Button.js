import React from 'react';
import {
  Text, StyleSheet, TouchableOpacity
} from 'react-native';

const Button = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.ButtonStyle}>
    <Text style={styles.textStyle}>
      { children }
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  ButtonStyle: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    // marginLeft: 1,
    // marginRight: 1,
    // marginTop: 10,
    margin: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '300',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

// eslint-disable-next-line import/prefer-default-export
export { Button };

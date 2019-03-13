import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    // position: 'relative',
  },
});

// eslint-disable-next-line import/prefer-default-export
export { CardSection };

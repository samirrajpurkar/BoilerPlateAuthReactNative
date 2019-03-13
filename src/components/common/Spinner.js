import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = ({ size }) => (
  <View style={styles.container} size={size || 'large'}>
    <ActivityIndicator style={styles.activityIndicatorStyle} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    margin: 10,
  },
  activityIndicatorStyle: {
    paddingTop: 10,
    paddingBottom: 10,
  }
});


// eslint-disable-next-line import/prefer-default-export
export { Spinner };

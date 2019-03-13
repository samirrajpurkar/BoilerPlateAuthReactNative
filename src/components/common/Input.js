import React from 'react';
import {
  Text, View, TextInput, StyleSheet
} from 'react-native';

const Input = ({
  placeholder,
  label,
  value,
  onChangeText,
  secureTextEntry,
}) => (
  <View style={styles.containerStyle}>
    <Text style={styles.labelStyle}>
      {label}
    </Text>
    <TextInput
      secureTextEntry={secureTextEntry}
      autoCorrect={false}
      placeholder={placeholder}
      style={styles.inputStyle}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 16,
    paddingLeft: 20,
    flex: 1,
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 16,
    lineHeight: 23,
    flex: 2,
  }
});

// eslint-disable-next-line import/prefer-default-export
export { Input };

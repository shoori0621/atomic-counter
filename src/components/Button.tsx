import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  disabled?: boolean;
  label: string;
  testId: string;
  onPress: () => void;
}

export default function Button(props: Props) {
  const {label, disabled, testId, onPress} = props;
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      disabled={disabled}
      onPress={onPress}
      testID={testId}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#008080',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
});

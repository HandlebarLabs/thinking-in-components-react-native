import React from 'react';
import { StyleSheet, View } from 'react-native';

export default (props) => (
  <View style={styles.container}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    minHeight: 333,
  },
})

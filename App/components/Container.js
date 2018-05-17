import React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, ScrollView } from 'react-native';

export default (props) => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    <ScrollView>
      {props.children}
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#85D4E7',
    flex: 1,
  },
})

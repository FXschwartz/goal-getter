import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalDetails = (props: any) => {
  return (
    <View style={styles.GoalDetails}>
      <Text>This Is Goal Details! 👋</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  GoalDetails: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});

export default GoalDetails;
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Function component
function Welcome({ code, name }) {
  return (
    <Text style={styles.moduleText}>
      Welcome to {code} - {name}
    </Text>
  );
}

// Class component
export default class ModuleInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>These are my modules this semester:</Text>

        {/* Each module uses the Welcome component */}
        <Welcome code="C218" name="UI/UX Design for Apps" />
        <Welcome code="C219" name="Web App Development" />
        <Welcome code="C339" name="Software Testing and Analytics" />
        <Welcome code="C346" name="Mobile App Development" />
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingLeft: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  moduleText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EventList from './EventList';


export default function App() {
  return (
    <EventList /> 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4286A',
    alignItems: 'center'
   
  },
});

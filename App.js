import { useState } from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Text, ScrollView } from 'react-native';

export default function App() {
  const [todos,setTodos] = useState([
    {item:'Play football',Key:'1'},
    {item:'Read Textbook',Key:'2'},
    {item:'Cook For Family',Key:'3'},
    {item:'Do React Native Project',Key:'4'},
    {item:'Learn To Play Guitar',Key:'5'},
    {item:'Call dad and mom',Key:'6'},
    {item:'Transfer to Electrician',Key:'7'},
    {item:'Transfer to mom',Key:'8'},
    {item:'Transfer to dad',Key:'9'},
  ]);
  return (
    <>
      <SafeAreaView>
        <View style={styles.AD}>
          <ScrollView>
          {
            todos.map((todo) => {
              return <Text style={styles.todotext}>{todo.item}</Text>
            })
          }
          </ScrollView>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  AD: {
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
  },
  todotext:{
    backgroundColor: 'skyblue',
    paddingVertical: 24,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10
  }
});

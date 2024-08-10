import { StatusBar } from 'expo-status-bar';
import { PlatformColor, StyleSheet, Text, View,
  AppRegistry,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Note from './components/Note';

export default function App() {
  state = {
    noteArray: [{'note': 'testnote 1'}],
    noteText: '',
  }
  let notes = this.state.noteArray.map((val, key) => {
    return <Note key={key} keyval={key} val={val} deleteMethod={ ()=>ThisParameterType.deleteNote(key) } />
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Reamind</Text>
      </View>
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollContainer}></ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

        <TextInput style={styles.textInput}
          placeholder='Add Note' placeholderTextColor='white' underlineColorAndroid='transparent'>
        </TextInput>



      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: PlatformColor('@android:color/holo_green_light', 'systemGray4'),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor:'#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 28,
    padding: 35,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45,
    zIndex: 10
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop: 46,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  },
});

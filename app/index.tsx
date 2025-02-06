import { useState } from 'react';
import { Image, Text, StyleSheet,View } from 'react-native';
import { plantsList } from './lib/Data.js';
import { Button,Tooltip,PaperProvider,Modal,Portal } from 'react-native-paper';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < plantsList.length - 1;
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }
  function handlePrevClick() {
    if (index>0) {
      setIndex(index - 1);
    }
  }

  let plants = plantsList[index];
  return (
    
  <PaperProvider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>{plants.description}</Text>
        </Modal>
      </Portal>
      <View style={style.cont}>
      <Text style={style.title2}> Растения </Text>
      <Tooltip title={plants.name}><Image style={style.image} source={{uri:plants.url}} /></Tooltip>
      <Text style={style.title}>
        {plants.name}
      </Text>
      <Text style={style.title3}>Семейство: {plants.sem}
      </Text>
      <Text style={style.text}>{plants.description}</Text>
      <Button style={{marginTop: 5}} onPress={showModal}>
        Подробнее
      </Button>
      <View style={style.buttons}>
        <Button mode="contained" onPress={handlePrevClick} > Предыдущий</Button>
        <Button mode="contained" onPress={handleNextClick} > Следующий</Button>
      </View>
      <Text>
        ({index + 1} of {plantsList.length})
      </Text>
    </View>
    </PaperProvider>
    
  );
}

const style = StyleSheet.create({

  cont: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  image: {
    marginBottom: 10, 
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 30,
    gap: 20,
    flexDirection: 'row'
  },
  text: {
    textAlign: 'justify',
    marginBottom: 10,
    height: 120,
    lineHeight: 20,
    fontSize: 15,
  },
  title:{
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  title2:{
    marginBottom: 50,
    fontWeight: 'bold',
    fontSize: 30,
  },
  title3:{
    marginBottom: 10,
    fontSize: 17,
  }
});



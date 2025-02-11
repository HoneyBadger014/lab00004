import { usePlaces } from '../context/PlacesContext';
import CategoryCard from '../components/CategoryCard';
import { ScrollView, Text, Image, StyleSheet, View } from 'react-native';

export default function PlaceDetailScreen({ navigation }) {
  const { state, dispatch } = usePlaces();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{state.selectedPlace.name}</Text>
      <Image style={styles.image} source={{ uri: state.selectedPlace.imageUrl }} />
      <Text style={styles.description}>{state.selectedPlace.description}</Text>
      <Text style={styles.rating}>Рейтинг: {state.selectedPlace.rating} ★</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
    color: '#333',
  },
  image: {
    height: 250,
    width: '100%',
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 15,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#555',
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff9800',
  },
});

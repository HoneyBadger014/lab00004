import { usePlaces } from '../context/PlacesContext';
import CategoryCard from '../components/CategoryCard';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

export default function PlacesScreen({ navigation }) {
  const { state, dispatch } = usePlaces();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.categoryTitle}>{state.selectedCategory}</Text>
      {state.places
        .filter(item => item.category === state.selectedCategory).map(item => (
          <CategoryCard
            key={item.name}
            title={item.name}
            onPress={() => {
              dispatch({ type: 'SELECT_PLACE', payload: item });
              navigation.navigate('Details');
            }}
          />
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
});

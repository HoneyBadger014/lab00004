import { usePlaces } from '../context/PlacesContext';
import CategoryCard from '../components/CategoryCard';
import { ScrollView } from 'react-native';

export default function CategoriesScreen({ navigation }) {
  const { state, dispatch } = usePlaces();

  return (
    <ScrollView>
      {state.categories.map((category) => (
        <CategoryCard
          key={category}
          title={category}
          onPress={() => {
            dispatch({ type: 'SELECT_CATEGORY', payload: category });
            navigation.navigate('Places');
          }}
        />
      ))}
    </ScrollView>
  );
}

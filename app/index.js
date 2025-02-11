import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PlacesProvider } from '../app/context/PlacesContext';
import CategoriesScreen from '../app/screens/CategoriesScreen';
import PlacesScreen from '../app/screens/PlacesScreen';
import PlaceDetailScreen from '../app/screens/PlaceDetailScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <PlacesProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
            backgroundColor: '#ff9800',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        >
          <Stack.Screen 
            name="Categories" 
            component={CategoriesScreen}
            options={{ 
                      title: 'Путеводитель по Каиру',
                      headerBackTitle: 'Назад', 
                      headerBackTitleStyle: { fontSize: 16, color: 'white' },
                    }}
          />
          <Stack.Screen 
            name="Places" 
            component={PlacesScreen}
            options={{ 
                      title: 'Категории',
                      headerBackTitle: 'Назад', 
                      headerBackTitleStyle: { fontSize: 16, color: 'white' }
                    }}
          />
          <Stack.Screen 
            name="Details" 
            component={PlaceDetailScreen}
            options={{ 
                      title: 'Места',
                      headerBackTitle: 'Назад', 
                      headerBackTitleStyle: { fontSize: 16, color: 'white' }
                    }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PlacesProvider>
  );
}

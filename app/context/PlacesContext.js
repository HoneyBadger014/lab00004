import React, { createContext, useContext, useReducer } from 'react';
import { places, categories } from '../data/places';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  places: places,
  categories: categories,
  selectedCategory: null,
  selectedPlace: null,
};

const loadData = async () => {
  try {
    const savedPlaces = await AsyncStorage.getItem('@places');
    return savedPlaces ? JSON.parse(savedPlaces) : places;
  } catch (e) {
    return places;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'SELECT_PLACE':
      return { ...state, selectedPlace: action.payload };
    default:
      return state;
  }
};

const PlacesContext = createContext();
export const PlacesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PlacesContext.Provider value={{ state, dispatch }}>
      {children}
    </PlacesContext.Provider>
  );
};
export const usePlaces = () => useContext(PlacesContext);

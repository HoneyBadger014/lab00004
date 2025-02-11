import styled from 'styled-components/native';
import {Text} from 'react-native';

const Container = styled.TouchableOpacity`
 flex-direction: row;
 margin: 8px;
 padding: 16px;
 background: white;
 border-radius: 8px;

 `;
const ResponsiveImage = styled.Image`
 width: ${({ isTablet }) => (isTablet ? 150 : 100)}px;
 height: ${({ isTablet }) => (isTablet ? 150 : 100)}px;
 border-radius: 8px;
 `;
export default function PlaceItem({ place, onPress, isTablet }) {
  return (
    <Container onPress={onPress}>
      <ResponsiveImage source={place.imageUrl} isTablet={isTablet} />
      <Text style={{ flex: 1, marginLeft: 16 }}>{place.name}</Text>
    </Container>
  );
}

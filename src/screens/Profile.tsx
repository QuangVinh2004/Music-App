import * as React from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute,RouteProp } from '@react-navigation/native'; // Sử dụng useRoute để truy cập route
import { Button } from '@react-navigation/elements';

function ProfileScreen() {
  const navigation = useNavigation();
 

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Profile Screen</Text>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
}

export default ProfileScreen;

import { Button, View, Text ,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

 function UpdatesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.container}>
      <Text>Updates Screen</Text>
      <Button
          title="Go to Profile"
          onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
export default UpdatesScreen;

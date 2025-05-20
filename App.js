import { StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native';
import PokemonCard from './components/PokemonCard';


export default function App() {

  const charmanderData = {
    name: "Charmander",
    image: require("./assets/pokemon-image.jpeg"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle_by_bonehedtoons_dflgbg2-fullview.jpg"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasur-image.jpeg"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Leech Seed"],
    weaknesses: ["Ice", "Fire", "Flying", "Psychic"],

  };

  const PikachuData = {
    name: "Pikachu",
    image: require("./assets/charmander-image.jpeg"),
    type: "Electric",
    hp: 35,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Growl"],
    weaknesses: ["Ground"]
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <PokemonCard {...charmanderData} />
      <PokemonCard {...squirtleData} />
      <PokemonCard {...bulbasaurData} />
      <PokemonCard {...PikachuData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',  // also fixed this — you were missing one digit
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

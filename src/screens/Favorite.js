import { SafeAreaView, Text, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonFavoriteApi } from "../api/favorite";

export default function Favorite() {
  const [favorites, setFavorites] = useState(null);

  const checkFavorites = async () => {
    const response = await getPokemonFavoriteApi();
    console.log(response);
  };

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title="Obtener favoritos" onPress={checkFavorites} />
    </SafeAreaView>
  );
}

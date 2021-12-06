import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mathias.jpg")}
            title="Mathias Meisner"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },

  image: {
    width: "100%",
    height: 300,
  },

  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
  },

  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
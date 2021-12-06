import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

function AppText({ children, style, ...otherProbs }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProbs}>
      {children}
    </Text>
  );
}

export default AppText;

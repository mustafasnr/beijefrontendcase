import React from "react";
import { Pressable, Text } from "react-native";

const ChangeStateButton = (params) => {
  return (
    <Pressable
      onPress={() => {
        params.onPressFunction(params.value);
      }}
      activeOpacity={1}
      style={{
        width: 20,
        height: 50,
        flex: 0.3,
        justifyContent: "center",
        borderBottomWidth: 2,
      }}
    >
      <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: "600" }}>
        {params.title}
      </Text>
    </Pressable>
  );
};
export default ChangeStateButton;

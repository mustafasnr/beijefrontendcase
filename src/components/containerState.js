import React from "react";

import { View } from "react-native";
import SliderComponent from "./sliderComponent";

export const ContainerState = (params) => {
  switch (params.containerState) {
    case 0:
      return (
        <View style={{ width: "100%", flex: 1 }}>
          <SliderComponent
            title={"Standart Ped"}
            minValue={0}
            maxValue={60}
            step={10}
            value={params.items[0]}
            changeValueFunction={params.setItems[0]}
          ></SliderComponent>
          <SliderComponent
            title={"Süper Ped"}
            minValue={0}
            maxValue={60}
            step={10}
            value={params.items[1]}
            changeValueFunction={params.setItems[1]}
          ></SliderComponent>
          <SliderComponent
            title={"Süper+ Ped"}
            minValue={0}
            maxValue={60}
            step={10}
            value={params.items[2]}
            changeValueFunction={params.setItems[2]}
          ></SliderComponent>
        </View>
      );
    case 1:
      return (
        <View style={{ width: "100%", flex: 1 }}>
          <SliderComponent
            title={"Günlük Ped"}
            minValue={0}
            maxValue={100}
            step={10}
            value={params.items[3]}
            changeValueFunction={params.setItems[3]}
          ></SliderComponent>
          <SliderComponent
            title={"Süper Günlük Ped"}
            minValue={0}
            maxValue={100}
            step={10}
            value={params.items[4]}
            changeValueFunction={params.setItems[4]}
          ></SliderComponent>
        </View>
      );
    case 2:
      return (
        <View style={{ width: "100%", flex: 1 }}>
          <SliderComponent
            title={"Mini Tampon"}
            minValue={0}
            maxValue={60}
            step={10}
            value={params.items[5]}
            changeValueFunction={params.setItems[5]}
          ></SliderComponent>
          <SliderComponent
            title={"Standart Tampon"}
            minValue={0}
            maxValue={60}
            step={10}
            value={params.items[6]}
            changeValueFunction={params.setItems[6]}
          ></SliderComponent>
          <SliderComponent
            title={"Süper Tampon"}
            minValue={0}
            maxValue={60}
            step={10}
            value={params.items[7]}
            changeValueFunction={params.setItems[7]}
          ></SliderComponent>
        </View>
      );
    default:
      return null;
  }
};
export default ContainerState;

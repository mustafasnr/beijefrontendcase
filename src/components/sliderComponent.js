import React from "react";
import { View, Text } from "react-native";
import sliderStyle from "../styles/sliderStyle";
import { Slider } from "@mui/material";
const SliderComponent = (params) => {
  return (
    <View style={sliderStyle.sliderContainer}>
      <View style={sliderStyle.sliderTitleContainer}>
        <Text style={sliderStyle.titleText}>{params.title}</Text>
      </View>
      <View style={sliderStyle.sliderBodyContainer}>
        <Slider
          color="black"
          aria-label="Small steps"
          defaultValue={0}
          onChange={(e, v) => {
            params.changeValueFunction(v);
          }}
          step={params.step}
          value={params.value}
          marks={true}
          min={params.minValue}
          max={params.maxValue}
          valueLabelDisplay={params.value !== 0 ? "on" : "off"}
          size="30"
        />
      </View>
      <View style={sliderStyle.sliderValuesContainer}>
        <Text style={sliderStyle.sliderValueText}>{params.minValue}</Text>
        <Text style={sliderStyle.sliderValueText}>{params.maxValue}</Text>
      </View>
    </View>
  );
};

export default SliderComponent;

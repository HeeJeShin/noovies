import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

const ScreenOne = () => (
  <View>
    <Text>One</Text>
  </View>
);
const ScreenTwo = () => (
  <View>
    <Text>Two</Text>
  </View>
);
const ScreenThree = () => (
  <View>
    <Text>Three</Text>
  </View>
);

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator>
    <NativeStack.Screen name="one" component={ScreenOne} />
    <NativeStack.Screen name="Two" component={ScreenTwo} />
    <NativeStack.Screen name="Three" component={ScreenThree} />
  </NativeStack.Navigator>
);

export default Stack;

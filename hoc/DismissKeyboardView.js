import React from "react";
import { Pressable, Keyboard, View } from "react-native";

const DismissKeyboardHOC = (Comp) => {
  return ({ children, ...props }) => (
    <Pressable
      onPress={(a) => {
        console.log("ON PRESSSSSSSSSS");
        Keyboard.dismiss();
      }}
      accessible={false}
      // style={{backgroundColor: 'red'}}
    >
      <Comp>{children}</Comp>
    </Pressable>
  );
};
export default DismissKeyboardView = DismissKeyboardHOC(View);

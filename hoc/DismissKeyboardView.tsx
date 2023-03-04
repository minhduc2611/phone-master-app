import React from "react";
import { Pressable, Keyboard, View } from "react-native";

const DismissKeyboardHOC = (Comp: any) => {
  return ({ children, ...props }: any) => (
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
const DismissKeyboardView = DismissKeyboardHOC(View);
export default DismissKeyboardView;

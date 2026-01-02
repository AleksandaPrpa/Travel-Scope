import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

const Divider = ({
  width = "100%",
  thickness = 1,
  marginVertical = 16,
  color,
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View
      style={{
        width,
        height: thickness,
        backgroundColor: color ?? theme.iconColor,
        opacity: 0.3,
        marginVertical,
        alignSelf: "center",
      }}
    />
  );
};

export default Divider;

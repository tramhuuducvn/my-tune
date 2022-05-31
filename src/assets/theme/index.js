import { Appearance } from "react-native";
import LightColor from './color/light';
import DarkColor from "./color/dark";

const colorScheme = Appearance.getColorScheme();
const COLOR = colorScheme === 'dark' ? DarkColor : LightColor;

export {COLOR}
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class controller {
  /// Widths
  static w20 = width / 6 - 49;
  static w25 = width / 6 - 44;
  static w30 = width / 6 - 39;
  static w35 = width / 6 - 34;
  static w45 = width / 6 - 24;
  static w50 = width / 6 - 19;
  static w60 = width / 6 - 9;
  static w65 = width / 2 - 142;
  static w70 = width / 2 - 137;
  static w80 = width / 2 - 127;
  static w100 = width / 2 - 107;
  static w120 = width / 2 - 87;
  static w128 = width / 2 - 79;
  static w150 = width / 2 - 57;
  static w180 = width / 2 - 27;
  static w200 = width / 1.29 - 120;
  static w220 = width / 1.29 - 100;
  static w240 = width / 1.29 - 80;
  static w276 = width / 1.5;
  static w300 = width / 1.38;
  static w313 = width / 1.32;
  static w320 = width / 1.29;
  static w330 = width / 1.18 - 20;
  static w350 = width / 1.18;
  /// Heights
  static h128 = height / 2 - 240;
  static h148 = height / 2 - 220;
  static h184 = height / 4;
  static h200 = height / 2-168;
  static h163 = height / 4.5;
  static h400 = height / 1.84;
  // Fonts
  static font15 = 15;
  static font16 = 16;
  static font18 = 18;
  static font20 = 20;
  static font22 = 22;
  static font24 = 24;
  static font26 = 26;
  static font28 = 28;
  static font30 = 30;
}

module.exports = controller;

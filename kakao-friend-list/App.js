import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./src/Header";
import MyProfile from "./src/MyProfile";
import { myProfile } from "./src/data";
import { getStatusBarHeight, isIPhone12 } from "react-native-status-bar-height";
import Margin from "./src/components/Margin";
import Divison from "./src/components/Divison";
import FriendSection from "./src/FriendSection";
import { friendProfiles } from "./src/data";
import FriendList from "./src/FriendList";

const statusBarHeight = getStatusBarHeight(true);

export default function App() {
  const [isOpened, setIsOpened] = useState(true);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
        edges={["top", "right", "bottom", "left"]} // 예외없이 모두 안전영역 적용
      >
        <Header />
        <Margin height={10} />
        <Margin height={10} />
        <MyProfile
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
        />
        <Margin height={15} />
        <FriendSection
          friendProfileLen={friendProfiles.length}
          onPressArrow={onPressArrow}
          isOpened={isOpened}
        />
        <Divison />
        <FriendList data={friendProfiles} isOpened={isOpened} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
    paddingHorizontal: 15,
  },
});

import React, { useContext, useEffect, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { UserProfileContext } from "../../../services/userProfile/user-profile.contex";
import { View } from "react-native";

const ProfileCamera = styled(Camera)`
  flex: 1;
  width: 100%;
`;

export const CameraScreen = ({ navigation }) => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const { setUserProfilePictureUri } = useContext(UserProfileContext);
  const cameraRef = useRef();

  const snap = async () => {
    if (cameraRef) {
      const onPictureSaved = (photo) => {
        setUserProfilePictureUri(photo.uri);
        navigation.goBack();
      };
      await cameraRef.current.takePictureAsync({
        onPictureSaved,
      });
    }
  };

  useEffect(() => {
    if (permission && !permission.granted) {
      requestPermission().then();
    }
  }, [permission, requestPermission]);

  return !permission ? (
    <View />
  ) : (
    <>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={CameraType.front}
        ratio="16:9"
        onPress={snap}
      />
      <Button icon="camera" mode="contained" onPress={snap}>
        Take a Profile picture
      </Button>
    </>
  );
};

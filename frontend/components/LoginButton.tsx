// src/components/LoginButton.tsx

import React from "react";
import { View, Button, StyleSheet } from "react-native";

type Props = {
  onPress: () => void;
  title?: string;
  disabled?: boolean;
};

const LoginButton = ({ onPress, title = "Login", disabled = false }: Props) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title={title} onPress={onPress} disabled={disabled} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
  },
});

export default LoginButton;

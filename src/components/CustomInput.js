import React from 'react';
import { StyleSheet, TextInput, View, Image, TouchableOpacity, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useTheme } from '../assets/theme/Theme';

const CustomInput = ({ placeholder, svgImage, label,onPress,secureTextEntry }) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {label && <Text style={[styles.label, {color: theme.background}]}>{label}</Text>}
      <View style={[styles.inputContainer, { borderColor: theme.gray }]}>
        <TextInput
          style={[styles.input, { color: theme.background }]}
          placeholder={placeholder}
          placeholderTextColor="grey"
          secureTextEntry={secureTextEntry}
        />
        <TouchableOpacity onPress={onPress}>
          <SvgXml xml={svgImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10, // Added to give space between the label and the input field
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  label: {
    fontSize: 12,
    marginTop: 5, // Adjust as needed for spacing
    marginBottom: 5
  },
});

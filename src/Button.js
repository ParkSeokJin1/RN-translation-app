import { StyleSheet, TouchableOpacity, Text } from "react-native";


const Button = ({onPress, isSelected, text}) => {
    return (
      <TouchableOpacity onPress={onPress} style={[
        styles.buttonContainer,
         isSelected ? styles.selectedButton : styles.notSelectedButton,
      ]}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    ) 
      
    
}

export default Button;



const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: "#FFFFFF80",
      borderWidth: 2,
      borderRadius: 15,
      paddingHorizontal: 10,
      paddingVertical: 3,
      marginHorizontal: 5,
    },
    selectedButton: {
      borderColor: "white",
    },
    notSelectedButton: {
        borderColor: 'transparent',
    },
    buttonText: {
       color: "white",
       fontSize: 16,
    },
  });
  
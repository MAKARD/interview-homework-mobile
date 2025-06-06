import { StyleSheet } from "react-native";

import { Colors } from "@/ui/constants/Colors";

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 5
    },
    textInput: {
        backgroundColor: Colors.light.secondary,
        height: 32,
        color: Colors.light.text,
        padding: 5,
        borderRadius: 5,
        marginTop: 5
    }
});

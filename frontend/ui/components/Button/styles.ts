import { Colors } from "@/ui/constants/Colors";
import { StyleSheet } from "react-native";

const base = StyleSheet.create({
    wrapper: {
        padding: 10,
        borderRadius: 15,

        alignItems: 'center'
    }
});

const type = StyleSheet.create({
    primary: {
        backgroundColor: Colors.light.tint
    },
    secondary: {
        backgroundColor: Colors.light.secondary,
    }
});

export const styles = {
    base,
    type
}
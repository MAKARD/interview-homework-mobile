import { Colors } from "@/ui/constants/Colors";
import { StyleSheet } from "react-native";

const base = StyleSheet.create({
    wrapper: {
        padding: 10,
        borderRadius: 15,
    }
});

const type = StyleSheet.create({
    primary: {
        backgroundColor: Colors.light.tint
    },
    secondary: {

    }
});

export const styles = {
    base,
    type
}
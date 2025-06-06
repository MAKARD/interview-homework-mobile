import { Colors } from "@/ui/constants/Colors";
import { StyleSheet } from "react-native";

const sizes = StyleSheet.create({
    large: {
        fontSize: 32,
        fontWeight: 900
    },
    medium: {
        fontSize: 18,
        fontWeight: 500
    },
    small: {
        fontSize: 14,
        fontWeight: 200
    }
});

const variants = StyleSheet.create({
    "dark-background": {
        color: Colors.dark.text,
    },
    "light-background": {
        color: Colors.light.text,
    }
})

export const styles = {
    sizes,
    variants
}
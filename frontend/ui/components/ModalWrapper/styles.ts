import { StyleSheet } from "react-native";

import { Colors } from "@/ui/constants/Colors";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#4e443c88',

        justifyContent: "center",
        padding: 20
    },
    body: {
        borderRadius: 20,

        backgroundColor: Colors.light.background,

        padding: 20
    }
});

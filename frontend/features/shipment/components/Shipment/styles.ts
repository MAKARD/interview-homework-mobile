import { StyleSheet } from "react-native";

import { Colors } from "@/ui/constants/Colors";

export const styles = StyleSheet.create({
    card: {
        marginBottom: 10
    },
    badge: {
        backgroundColor: Colors.light.tint,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    },
    topContainer: {
        flexDirection: "row",
        marginBottom: 5
    }
});
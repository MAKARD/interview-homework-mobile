import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,

        overflow: 'hidden',

        marginRight: 20,
    },
    imageGroup: {
        flexDirection: 'row',
        alignItems: "center",
        marginVertical: 10
    },
    changeButton: {
        width: 100,
        height: 100,

        backgroundColor: "transparent",

        justifyContent: "center",
        alignItems: 'center',

    },
    addButton: {
        width: 100,
        height: 100,

        justifyContent: "center",
        alignItems: "center",
    },
    addButtonContent: {
        alignItems: "center",
    }
})
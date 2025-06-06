import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    verticalMargin: {
        height: 8
    },
    buttonsContainer: {
        marginTop: 17,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    card: {
        flexDirection: 'row',
    },
    mainText: {
        flex: 2,
        marginLeft: 10,
        paddingTop: 30,
    },
    secondaryText: {
        flex: 1,
        alignItems: 'flex-end',
        paddingTop: 30,
    }
});
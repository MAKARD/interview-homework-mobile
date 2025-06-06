import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    badge: {
        marginTop: 15,
        marginBottom: 5,
    },
    createdDate: {
        marginVertical: 5,
    },
    product: {
        marginVertical: 5
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
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,

        borderRadius: 10,
        marginRight: 10,
    },
    mainText: {
        flex: 1,
    },
    secondaryText: {
        flex: 0,
        alignItems: 'flex-end'
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginBottom: 25,
        marginTop: 10
    },
    button: {
        flex: 1,
        alignItems: 'center'
    },
    buttonsMargin: {
        width: 20
    }
});
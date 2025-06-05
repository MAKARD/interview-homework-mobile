import { StyleSheet } from "react-native";

import { Colors } from "@/ui/constants/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: Colors.light.background,
        
        paddingHorizontal: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        overflow: 'hidden',
    },
    backButton: {
       position: 'absolute',
       top: 8,
       left: 0
    },
});

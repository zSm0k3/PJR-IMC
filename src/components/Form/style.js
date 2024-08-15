import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#FFFAFA",
        alignItems: "center",
        marginTop: 30,
        borderRadius: 30,
    },

    form: {
        width: "100%",
        height: "100%",
        marginTop: 30,
        padding: 10,
    },

    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },

    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },

    buttomCalculator: {
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#4682B4",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30,
    },

    textButtonCalculator:{
        fontSize: 20,
        color: "#ffffff",
    },
});
export default styles
import React from "react";
import { View, Text } from "react-native";
import styles from "../style";

export default function ResultIMC(props){
    return(
        <View>
            <Text>
                {props.messageResultIMC}
            </Text>
            
            <Text>
                {props.ResultIMC}
            </Text>
        </View>
    );
};
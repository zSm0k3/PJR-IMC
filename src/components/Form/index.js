import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-web";

export default function Form(){
    return(
        <View>
            <View>
                <Text>
                    Altura
                </Text>
                <TextInput 
                placeholder="Ex. 1.70"
                keyboardType="Numeric"
                />
                <Text>
                    Peso
                </Text>
                <TextInput 
                placeholder="Ex. 65.60"
                keyboardType="Numeric"
                />
            </View>
        </View>
    );
}
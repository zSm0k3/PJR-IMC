import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";


export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha seu peso e sua altura");
    const [imc, setIMC] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")

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

                <Button
                    title={textButton}
                onPress={() => Alert.alert('Simple Button pressed')}
                />

            </View>
        </View>
    );
}
import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultIMC from "./ResultIMC";


export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha seu peso e sua altura");
    const [imc, setIMC] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")

    function imcCalculator (){
        return setIMC((weight / (height * height)).toFixed(2))  
    }

    function validationIMC(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é: ")
            setTextButton("CALCULAR NOVAMENTE")
            return
        }
        setIMC(null)
        setTextButton("Calcular")
        setMessageImc("Preencha Peso e Altura")
    }

    return(
        <View>
            <View>
                <Text>
                    Altura
                </Text>
                <TextInput 
                onChangeText={setHeight}
                value = {height}
                placeholder="Ex. 1.70"
                keyboardType="Numeric"
                />
                <Text>
                    Peso
                </Text>
                <TextInput 
                onChangeText={setWeight}
                value = {weight}
                placeholder="Ex. 65.60"
                keyboardType="Numeric"
                />

                <Button
                    onPress={() => validationIMC()}
                    title={textButton}
                />

                <ResultIMC
                messageResultIMC = {messageImc}
                ResultIMC = {imc}
                />
            </View>
        </View>
    );
}
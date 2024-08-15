import React, {useState} from "react";
import { View, Text, TextInput, Button, Touchable, TouchableOpacity } from "react-native";
import ResultIMC from "./ResultIMC/index";
import styles from "./style";


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
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>
                    Altura
                </Text>
                <TextInput style={styles.input}
                onChangeText={setHeight}
                value = {height}
                placeholder="Ex. 1.70"
                keyboardType="Numeric"
                />
                <Text style={styles.formLabel}>
                    Peso
                </Text>
                <TextInput style={styles.input}
                onChangeText={setWeight}
                value = {weight}
                placeholder="Ex. 65.60"
                keyboardType="Numeric"
                />

                <TouchableOpacity
                    style={styles.buttomCalculator}
                    onPress={() =>{
                        validationIMC()
                    }}
                >

                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>

                <ResultIMC
                messageResultIMC = {messageImc}
                ResultIMC = {imc}
                />
            </View>
        </View>
    );
}
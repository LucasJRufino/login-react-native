import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const TextMessage=(props) =>{
    const {
            email: email,
            senha: senha,
            } = props;
    const [hasError, setHasError] = useState(false);

    useEffect(()=>{
        setHasError(!!email && !!senha);
    },[ erro ]);

return(
    <View>
        {hasError ?
        (<Text style={styles.erro}>{erro}</Text>)
        : (<Text style={styles.texto}>{message}</Text>)}
    </View>
    );

}

const styles = StyleSheet.create({
    texto:{
    fontSize: 70,
    textAlign: 'center',
    fontWeight: 'bold'
    },
    erro:{
        fontSize: 70,
        textAlign: 'left',
        fontWeight: 'bold',
        color: 'red'
    }
});

export default TextMessage;

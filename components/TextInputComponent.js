import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const TextInputComponent = ({
    iconType,
    iconName,
    placeholder,
    placeholderTextColor,
    value,
    onChangeText,
    keyboardType,
    autoCapitalize,
    secureTextEntry,
    style,
}) => {
    return (
        <View style={[styles.inputContainer, style]}>
            {iconType === 'Ionicons' && <MaterialIcons name={iconName} size={24} color="#ccc" style={styles.icon} />}
            {iconType === 'MaterialIcons' && <MaterialIcons name={iconName} size={24} color="#ccc" style={styles.icon} />}
            {iconType === 'AntDesign' && <AntDesign name={iconName} size={24} color="#ccc" style={styles.icon} />}
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                secureTextEntry={secureTextEntry}
                style={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        paddingVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
});

export default TextInputComponent;

import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native'
import { Eye, EyeSlash } from 'phosphor-react-native'

export default function Input({
  name,
  type,
  onChange,
  style,
  placeholder,
  value,
  ...rest
}) {
  const [valueInput, setValueInput] = useState(value ? value : '')
  const [visiblePassword, setVisiblePassword] = useState(true)

  return (
    <View style={styles.container}>
      <TextInput
        {...rest}
        style={{ ...styles.input, ...style }}
        onChangeText={(value)=>{
            setValueInput(value)
            onChange(value)
        }}
        value={valueInput}
        secureTextEntry={ type !='password' ? false: visiblePassword}
        placeholder={placeholder}
      />

      <View style={styles.containerIcon}>
        {type === 'password' ? (
          visiblePassword ? (
            <TouchableOpacity
              onPress={() => setVisiblePassword(!visiblePassword)}
            >
              <Eye
                color="#097303"
                weight="fill"
                size={22}
                onPress={() => setVisiblePassword(!visiblePassword)}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setVisiblePassword(!visiblePassword)}
            >
              <EyeSlash size={22} color="#097303" weight="fill" />
            </TouchableOpacity>
          )
        ) : (
          <></>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E8E8E8',
    flexDirection: 'row',
  },
  containerIcon: {
    width: '10%',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#F6F6F6',
    height: 50,
    width: '90%',
    paddingLeft: 14,
  },
})

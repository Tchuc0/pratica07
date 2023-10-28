
// Register.js
import React from 'react';
import {View} from 'react-native'
import { Text, TextInput, HelperText, Button } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

function Register() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Text style={{ fontSize: 32, textAlign: 'center' }}>Registrar</Text>
      <Controller
        name="nome"
        control={control}
        rules={{ required: true, minLength: 3 }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="Nome"
            mode="outlined"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <HelperText type="error" visible={errors.nome}>
        {errors.nome && errors.nome.message}
      </HelperText>
      <Controller
        name="email"
        control={control}
        rules={{ required: true, pattern: /^\S+@\S+$/i }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="Email"
            mode="outlined"
            value={value}
            onChangeText={onChange}
            keyboardType="email-address"
          />
        )}
      />
      <HelperText type="error" visible={errors.email}>
        {errors.email && errors.email.message}
      </HelperText>
      <Controller
        name="senha"
        control={control}
        rules={{ required: true, minLength: 6 }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="Senha"
            mode="outlined"
            value={value}
            onChangeText={onChange}
            secureTextEntry={true}
          />
        )}
      />
      <HelperText type="error" visible={errors.senha}>
        {errors.senha && errors.senha.message}
      </HelperText>
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Registrar
      </Button>
    </View>
  );
}

export default Register;
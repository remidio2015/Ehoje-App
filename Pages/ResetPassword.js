import { StatusBar } from 'expo-status-bar';
import Input from '../Components/Input'
import Button from '../Components/Button'
import { ResetPasswordValidatioSchema } from '../validations/Form';
import { Formik } from 'formik'
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity} from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.containerWrapper}>

<Formik validationSchema={ResetPasswordValidatioSchema} initialValues={{ Email: ''}} onSubmit={(values) => alert(values)}>

{(
{ handleChange,
  handleSubmit,
  values, 
  errors,
  isValid
 }


)=>(<><View style={styles.containerInput}>
        <Input name="Email" value={values.Email} type="text" onChange={handleChange('Email')} placeholder="Email" />
        {errors.Email && <Text style={styles.textError}>{errors.Email}</Text>}
      </View>
   

      <View style={styles.containerButton}>
        <Button title="Redefinir Senha" onPress={handleSubmit} />
      </View>
      </>)}

</Formik>

     

      
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '5%',
    paddingRight:'5%',
    paddingTop:'20%'
  },
  containerWrapper: {
    flex: 1,
    width: '100%',
  },
  containerInput:{
    paddingTop: 18,
  },
  containerButton:{
    paddingTop: 18,
    width: '100%',
  },
  textError:{
    color:'red'
    
    }
});

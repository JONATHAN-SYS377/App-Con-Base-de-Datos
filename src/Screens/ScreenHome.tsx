import React, { useEffect, useState } from 'react'
import { Text, View ,KeyboardAvoidingView,ScrollView,Image,Alert} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appestilos';
import axios from 'axios';
import { StackScreenProps } from '@react-navigation/stack';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';



// Varible para almacenar la ruta al servido que contiene la API en la cual vemos los datos de la base de datos

interface Props extends StackScreenProps<any, any> { };
export const ScreenHome = ({ navigation }: Props) => {

  const limpiarCampos = () => {
    SetTxtNumId('');
    SetTxtNombreGestor('');
    SetAñoLanzamiento('');
    SetNombreDesarrollador('');
  };

  const showAlert = () => {
    Alert.alert(
        'Confirmación de Registro',
        'Se a realizado un nuevo registro ',
        [
            { text: 'OK', onPress: () => {} },
            
        ]
    );
};
interface IUser {
  ID: string;
  Nombre: string;
  Lanzamiento: string;
  Desarrollador: string;
}
  const [txtId, SetTxtNumId] = useState('');
  const NumId = (text: string) => {
    SetTxtNumId(text);
  }

  const [txtNombreGestor, SetTxtNombreGestor] = useState('');
  const NombreGestor = (text: string) => {
    SetTxtNombreGestor(text);
  }

  const [TxtAñoLanzamiento, SetAñoLanzamiento] = useState('');

  const AñoLanzamiento = (text: string) => {
    SetAñoLanzamiento(text);
  }

  const [TxtNombreDesarrollador, SetNombreDesarrollador] = useState('');

  const NombreDesarrollador = (text: string) => {
    SetNombreDesarrollador(text);
  }
  //192.168.1.115
  const CreateGestor = async (nombre: String, Lanzamiento: string, Desarrollador: String,) => {
    axios.post('https://recordapi.azurewebsites.net/Recordatorio', {

      Nombre: nombre,
      Lanzamiento: Lanzamiento,
      Desarrollador: Desarrollador

    },
      { headers: { 'Content-Type': 'application/json' } }).then(Response => {
        console.log(Response.data)
        limpiarCampos()
        showAlert()
        GetGestor()
      }).catch(err => console.log(err));

  }
  const [Datosvalue, setDatos] = useState<IUser[]>();
  const GetGestor = () => {
    //192.168.1.115
    axios.get('https://recordapi.azurewebsites.net/Recordatorio').then(Response => {
        setDatos(Response.data)
    }).catch(err => console.log(err));
}

useEffect(() => {
    GetGestor()
}, [])
  return (

<KeyboardAvoidingView style={styles.PanelPrincipal}  behavior="height" enabled >



      <Text style={styles.Label}>Nombre del Gestor</Text>
      <TextInput
        value={txtNombreGestor}
        onChangeText={NombreGestor}
        style={styles.TextBox}
        inputMode='text'
        placeholder='Nombre del gestor'>
      </TextInput>

      <Text style={styles.Label}>Fecha de Lanzamiento</Text>
      <TextInput
        style={styles.TextBox}
        value={TxtAñoLanzamiento}
        onChangeText={AñoLanzamiento}
        inputMode='text'
        id='Lanzamiento'
        placeholder='Año lanzamiento Ejem: 2010'>
      </TextInput>

      <Text style={styles.Label}>Desarrollado por</Text>
      <TextInput
        style={styles.TextBox}
        value={TxtNombreDesarrollador}
        onChangeText={NombreDesarrollador}
        inputMode='text'
        id='Desarrollador'
        placeholder='Desarrollador'>
      </TextInput>

      <TouchableOpacity onPress={() => CreateGestor(txtNombreGestor, TxtAñoLanzamiento, TxtNombreDesarrollador)} >
      <Image source={require('../Screens/save_close_48px.png')} style={styles.SizeImageSave} />

      </TouchableOpacity>

    </KeyboardAvoidingView>

    
  )
}

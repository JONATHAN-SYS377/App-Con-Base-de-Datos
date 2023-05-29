import React, { useEffect, useState } from 'react'
import { Text, View, KeyboardAvoidingView, ScrollView, Image, Alert, Button } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appestilos';
import axios from 'axios';
import { StackScreenProps } from '@react-navigation/stack';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';
import { RadioButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';




// Varible para almacenar la ruta al servido que contiene la API en la cual vemos los datos de la base de datos

interface Props extends StackScreenProps<any, any> { };
export const ScreenHome = ({ navigation }: Props) => {
  const [value, setValue] = React.useState('first');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDateText, setSelectedDateText] = useState('');

  const showDateTimePicker = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);

    const formattedDate = format(currentDate, 'yyyy-MM-dd');
    setSelectedDateText(formattedDate);
  };

    const limpiarCampos = () => {
      SetTxtNumId('');
      SetTxtNombreGestor('');
      setSelectedDateText('');
      SetNombreDesarrollador('');
    };

    const showAlert = () => {
      Alert.alert(
        'Confirmación de Registro',
        'Se a realizado un nuevo registro ',
        [
          { text: 'OK', onPress: () => { } },

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

      <KeyboardAvoidingView style={styles.PanelPrincipal} behavior="height" enabled >



        <Text style={styles.Label}>Motivo de la nota</Text>
        <TextInput
          value={txtNombreGestor}
          onChangeText={NombreGestor}
          style={styles.TextBox}
          inputMode='text'
          placeholder='Nombre del gestor'>
        </TextInput>

        <Text style={styles.Label}>Fecha de la nota</Text>
        <View style={styles.botonfecha}>
          <Button title="Seleccionar fecha" onPress={showDateTimePicker} />

          {showDatePicker && (
            <DateTimePicker
              value={date}
              //mode="datetime"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>

        <TextInput
          style={styles.TextBox}
          value={selectedDateText}
          onChangeText={(text) => setSelectedDateText(text)}
          inputMode='text'
          id='Lanzamiento'
          placeholder='Año lanzamiento Ejem: 2010' />
        {/* <TextInput
          value={selectedDateText}
          placeholder="Fecha seleccionada"
          onChangeText={(text) => setSelectedDateText(text)}
        /> */}

        {/* <TextInput
        style={styles.TextBox}
        value={TxtAñoLanzamiento}
        onChangeText={AñoLanzamiento}
        inputMode='text'
        id='Lanzamiento'
        placeholder='Año lanzamiento Ejem: 2010'>
      </TextInput> */}

        <Text style={styles.Label}>Descripción de la nota</Text>
        <TextInput
          style={styles.TextBox}
          value={TxtNombreDesarrollador}
          onChangeText={NombreDesarrollador}
          inputMode='text'
          id='Desarrollador'
          placeholder='Desarrollador'>
        </TextInput>
        {/* <View>
        <Button title="Seleccionar fecha" onPress={showDateTimePicker} />

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="datetime"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <TextInput
          value={selectedDateText}
          placeholder="Fecha seleccionada"
          onChangeText={(text) => setSelectedDateText(text)}
        />
      </View> */}

        <TouchableOpacity onPress={() => CreateGestor(txtNombreGestor, selectedDateText, TxtNombreDesarrollador)} >
          <Image source={require('../Screens/save_close_48px.png')} style={styles.SizeImageSave} />

        </TouchableOpacity>
        {/* <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
          <View>
            <Text style={styles.Label}>Claro</Text>
            <RadioButton value="first" />
          </View>
          <View>
            <Text style={styles.Label}>Oscuro</Text>
            <RadioButton value="second" />
          </View>

        </RadioButton.Group> */}
      </KeyboardAvoidingView>


    )
  }


import React, { useEffect, useState } from 'react'
import { View, Text, Button, Modal, TextInput, Alert, Pressable } from 'react-native';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { styles } from '../theme/appestilos';


interface IUser {
  ID: string;
  Nombre: string;
  Lanzamiento: string;
  Desarrollador: string;
}

export const Lista = () => {




  const DeleteGestor = (ID: string) => {
    //192.168.1.115
    axios.delete(`https://recordapi.azurewebsites.net/Recordatorio/${ID}`)
      .then(Res => {
        console.log(Res.data)
      }).catch(err => console.log(err))
  }
  const limpiarCampos = () => {
    SetTxtNumId('');
    SetTxtNombreGestor('');
    SetAñoLanzamiento('');
    SetNombreDesarrollador('');
  };
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


  const [Datosvalue, setDatos] = useState<IUser[]>();
  const [modalVisible, setModalVisible] = useState(false);
  const [editData, setEditData] = useState<IUser | null>(null);

  const GetGestor = () => {
    //192.168.1.115
    axios.get('https://recordapi.azurewebsites.net/Recordatorio').then(Response => {
      setDatos(Response.data)
    }).catch(err => console.log(err));
  }

  useEffect(() => {
    GetGestor()
  }, [])

  const [IDEliminar, setIDActualizar] = useState('');

  const Eliminar = (ID: string) => {
    setIDActualizar(ID)
    DeleteGestor(ID)
    GetGestor()
    console.log(ID)
  };

  const showAlert = (ID: string) => {
    Alert.alert(
      'Confirmación de eliminación',
      'Estas Seguro que deseas eliminar este registro',
      [
        { text: 'Eliminar', onPress: () => { Eliminar(ID) } },
        { text: 'Cancelar', onPress: () => console.log('Cancelar presionado') },
      ]
    );
  };

  const UpdateGestor = (ID: string, nombre: string, Lanzamiento: string, Desarrollador: string) => {
    //192.168.1.115
    axios.put(`https://recordapi.azurewebsites.net/Recordatorio/${ID}`, {
      
      Nombre: nombre,
      Lanzamiento: Lanzamiento,
      Desarrollador: Desarrollador

    },
      { headers: { 'Content-Type': 'application/json' } })
      .then(Response => {
        console.log(Response.data)
      }).catch(err => console.log(err));

  }

  const openEditModal = (item: IUser) => {
    setEditData(item);
    setModalVisible(true);

    // Asignar los valores del elemento seleccionado a los campos de entrada
    SetTxtNumId(item.ID.toString()); // Convertir a cadena de texto
    SetTxtNombreGestor(item.Nombre);
    SetAñoLanzamiento(item.Lanzamiento.toString()); // Convertir a cadena de texto
    SetNombreDesarrollador(item.Desarrollador);
  };


  return (
    <View style={styles.PanelPrincipal2}>

      <FlatList
        data={Datosvalue}
        keyExtractor={(item: IUser) => item.ID}
        renderItem={({ item }) => (
          <View>
            <View
              style={styles.Lista}>
              <Text style={styles.DatosLista}> ID: {item.ID}</Text>
              <Text style={styles.DatosLista}> Nombre: {item.Nombre}</Text>
              <Text style={styles.DatosLista}> Lanzamiento: {item.Lanzamiento}</Text>
              <Text style={styles.DatosLista}> Desarrollador: {item.Desarrollador}</Text>
              <View style={styles.containerBoton}>
                <TouchableOpacity onPress={() => openEditModal(item)}>
                  <Text style={styles.ButtonEditar}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { showAlert(item.ID) }}>
                  <Text style={styles.ButtonEliminar}>Eliminar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      <Modal
        visible={modalVisible}
        animationType='slide'
        transparent={true}
        style={styles.Modals}
        onRequestClose={() => setModalVisible(false)}
      >
        {/* Aquí puedes diseñar el contenido del modal */}
        {editData && (
          <View style={styles.modalContainer}>

            <Pressable onPress={() => {
              GetGestor()
              limpiarCampos()
              setModalVisible(false)
            }}>
              <Text style={styles.ButtonCerrar}>X</Text>
            </Pressable>

            <Text style={styles.modalTitle}>Editar Datos</Text>

            <Text style={styles.Label}>ID del Gestor</Text>

            <TextInput
              value={txtId}
              onChangeText={NumId}
              style={styles.TextBox}
              inputMode='text'
              id='ID'
              editable={false}
            >
            </TextInput>

            <Text style={styles.Label}>Nombre del Gestor</Text>
            <TextInput
              value={txtNombreGestor}
              onChangeText={NombreGestor}
              style={styles.TextBox}
              inputMode='text'
              id='nombre'>
            </TextInput>

            <Text style={styles.Label}>Año de Lanzamiento</Text>
            <TextInput
              style={styles.TextBox}
              value={TxtAñoLanzamiento}
              onChangeText={AñoLanzamiento}
              inputMode='text'
              id='Lanzamiento'>
            </TextInput>

            <Text style={styles.Label}>Desarrollado por</Text>
            <TextInput
              style={styles.TextBox}
              value={TxtNombreDesarrollador}
              onChangeText={NombreDesarrollador}
              inputMode='text'
              id='Desarrollador'>
            </TextInput>

            <View style={styles.containerBoton}>

              <Pressable onPress={() => {
                UpdateGestor(txtId, txtNombreGestor, TxtAñoLanzamiento, TxtNombreDesarrollador)
                GetGestor()
                limpiarCampos()
                setModalVisible(false)
              }}>
                <Text style={styles.ButtonEditar}>Editar</Text>
              </Pressable>
            </View>


          </View>
        )}
      </Modal>
    </View>
  )
}

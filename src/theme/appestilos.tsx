import { StyleSheet, Modal } from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  PanelPrincipal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: "#404040",
  },
  PanelPrincipal2: {
    padding: 10,
    flex: 1,
    // flexDirection: "column",
    // width: '100%',
     backgroundColor: "#404040",

  },
  scrollView: {
    flex: 1,
    marginBottom: 56, // Altura del botón flotante
  },
  floatingButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000', // Color de fondo del botón
    width: 56,
    height: 56,
    borderRadius: 28,
    elevation: 4, // Sombra del botón (solo en Android)
    right: 16, // Posición desde la derecha
    bottom: 16, // Posición desde la parte inferior
    fontSize: 16,
    color: '#000000', // Color del texto del botón
  },
  Label: {
    width: '100%',
    color: '#fff' ,
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 5,
    marginTop: 0,
    marginLeft: 10,
  },
  TextBox: {
    // width: '100%',
    backgroundColor: 'white',
    // fontSize: 20,
     borderRadius: 7,
     padding: 5,
    // marginTop: 5,
    // marginBottom: 5,
    // marginLeft: 10,
    // marginRight: 10,
    width: '100%',
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 0,
    paddingLeft: 15,
    textAlign:'left'

  },
  ButtonGuardar: {
    width: 'auto',
    textAlign: 'center',
    backgroundColor: '#3DC11A',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 100,
    marginRight: 100,
    fontSize: 20,
    fontWeight: 'bold',

  },
  ButtonEditar: {
    width: 150,
    textAlign: 'center',
    backgroundColor: '#255CBC',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 0,
    marginRight: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',

  },
  ButtonEliminar: {
    width: 150,
    textAlign: 'center',
    backgroundColor: '#C96A58',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 0,
    marginRight: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',

  },
  ButtonVerLista: {
    width: 'auto',
    textAlign: 'center',
    backgroundColor: '#55E5C5',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 250,
    marginRight: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  Lista: {
    // //backgroundColor: '#D8F9F1',
    // borderRadius: 10,
    // padding: 10,
    // marginVertical: 8,
    // marginHorizontal: 16,
    backgroundColor: '#FFFFE0', // Color de fondo similar a las notas rápidas de Windows
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 20,
    backgroundColor: '#4C4A48',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#4C4A48',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
  },
  containerBoton: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 5,
    height:'auto',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  DatosLista: {
    fontSize: 22,
    fontStyle: 'italic',
    color: '#000000',
    lineHeight: 28,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderLeftWidth: 1,
    borderLeftColor: '#C96A58',
    paddingBottom:6
  },
  modalContainer: {
    bottom: -100,
    marginLeft: 10,
    marginRight: 10,
    width: '95%',
    height: 560,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#37373D',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  modalTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 1,
    color: '#FFF',
  },
  modalInput: {
    width: '80%',
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  ButtonCerrar: {
    alignSelf: 'flex-end',
    width: 45,
    height: 35,
    textAlign: 'center',
    //backgroundColor: '#C42B1C',
    color: '#FFFFFF',
    borderRadius: 100,
    padding: 6,
    //marginBottom: 10,
    marginLeft: '75%', // Ajusta el margen derecho según sea necesario
    fontSize: 17,
    fontWeight: 'bold',
  },
  Modals: {
    backgroundColor: '#BFBFBF',
  },
  containerBtnFlotanta: {
    flex: 1,
    ackgroundColor: 'transparent',
    alignItems: 'flex-end', // Alinea el botón a la derecha
    justifyContent: 'flex-end', // Alinea el botón en la parte inferior
    margin: 16,
  },
  fab: {
    backgroundColor: '#BBF5E8', // Color de fondo del botón
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 60,
    height: 60,
    borderRadius: 28,
    elevation: 5, // Sombra del botón (solo en Android)
    color: '#000000', // Color del texto del botón
    fontSize: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    left: 270, // Posición desde la derecha
    bottom: 0, // Posición desde la parte inferior
    backfaceVisibility: 'hidden'
  },
  buttonText: {
    fontSize: 30,
    color: '#000000', // Color del texto del botón
  },
  fabText: {
    backfaceVisibility: 'hidden'
  },
  SizeImage:{
    width: 35,
    height: 35
  },
  SizeImageSave:{
    width: 50,
    height: 50,
    textAlign: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 100,
    marginRight: 100,
  },
  SizeImageSave2:{
    width: 50,
    height: 50,
    textAlign: 'center',
    borderRadius: 10,
    marginLeft: 100,
    marginRight: 100,
  },

});
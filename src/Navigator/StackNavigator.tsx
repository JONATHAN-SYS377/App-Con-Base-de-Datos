import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenHome, } from '../Screens/ScreenHome';
import { Lista } from '../Screens/Lista';
import { MostrarLista } from '../Screens/MostarLista';


const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator  >
            <Stack.Screen name="Listado" component={MostrarLista} />
            <Stack.Screen name="Ingreso Datos" component={ScreenHome} />
            {/* <Stack.Screen name="Ver Datos" component={Lista} /> */}
        </Stack.Navigator>
    )
}
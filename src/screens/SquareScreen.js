import React,{useReducer, useState} from "react";
import { StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
/**
 * The reducer function takes in a state object with red, green, and blue properties, and an action
 * object specifying which color to change and by how much, then returns a new state object with the
 * specified color updated accordingly.
 * @param state - The `state` parameter is an object that represents the current state of colors. It
 * has three properties: `red`, `green`, and `blue`, each storing a number value. The object looks like
 * this: `{ red: number, green: number, blue: number }`.
 * @param action - The `action` parameter in the `reducer` function is an object with two properties:
 * @returns The reducer function returns a new state object with the specified color value updated
 * based on the action provided. If the action specifies 'red', 'green', or 'blue', the corresponding
 * color value in the state is updated by adding the specified amount. If the action does not match any
 * of these colors, the function returns the current state unchanged.
 */
const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number}
    // action === {type: 'red' || 'green' || 'blue', payload: 15 || -15}
    switch(action.type) {
        case 'change_red':
            /* This line of code is a conditional ternary operator that checks if adding the
            `action.amount` to the current `state.red` value will result in a value greater than 255
            or less than 0. */
            return state.red + action.payload > 255 || state.red + action.payload < 0 
            ? state           
            :{ ...state, red: state.red + action.payload };
        case 'change_green':
            return  state.green + action.payload > 255 || state.green + action.payload < 0
            ? state        
            :{ ...state, green: state.green + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
            ? state
            :{ ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
}

const SquareScreen = () => {  
    const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0});
    const{red,green,blue} = state;

    // const setColor = (color, change) => {
        // color === 'red', 'green', 'blue'
        // change === +15, -15

        
    //     switch(color) {
    //         case 'red':
    //             red + change > 255 || red + change < 0 ? null : setRed(red + change);
    //             return;
    //         case 'green':
    //             green + change > 255 || green + change < 0 ? null : setGreen(green + change);
    //             return;
    //         case 'blue':
    //             blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
    //             return;
    //         default:
    //             return;
    //     }
    // }

    return (
        <View>
            <ColorCounter 

            onIncrease = {() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
            onDecrease = {() => dispatch({type: 'change_red', payload: -1* COLOR_INCREMENT})}
            color="Red"          
            />
            <ColorCounter 
            onIncrease = {() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
            onDecrease = {() => dispatch({type: 'change_blue', payload: -1* COLOR_INCREMENT})}
            color="Blue"       
            />
            <ColorCounter 
            onIncrease = {() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}	
            onDecrease = {() => dispatch({type: 'change_green', payload: -1* COLOR_INCREMENT})}
            color="Green"
            />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${state.red},${state.green},${state.blue})` }} />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize:40,
    },
    buttonStyle: {
        margin: 20,
    }
});
export default SquareScreen;
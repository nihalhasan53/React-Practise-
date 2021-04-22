import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Item = (props) =>
{
    return(
        <View style={[ { margin: 8, padding: 8}, styles.item]}>
            <Text>{props.name}</Text>
            <Button 
                title={"Delete"}
                color={"red"}
                onPress={() => props.delete(props.name)}
            />
        </View>

    )
    

}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'whitesmoke'
    }
})

export default Item;
import React,{useState} from 'react'
import {View,Text, Button,StyleSheet, ScrollView, TextInput} from 'react-native'
import Item from './Item'

const List=()=>
{
    const [title,setTitle]=useState('nihal')
    const [text,setText]=useState()
    const [list,setList]=useState(['Haii','hello'])

    const addItem=()=>
    {
        const updatedList=list;
        updatedList.push(text);
        setList(updatedList)
        console.log(updatedList)
        setText("")
    }

    const deleteItem = (index) => {
        const updatedList = list.filter((todo) => todo !== index);
        setList(updatedList);
      };

    return(
        <View style={{ width: "80%", marginBottom: 60 }}>
            <Text style={[styles.align, styles.font]}> {title}</Text>
            <ScrollView>
               {list.map((x,index)=><Item key={index} index={index} name={x} delete={deleteItem}/>)}
            </ScrollView>
            <View>
                <TextInput  style={styles.input} value={text} onChangeText={(text)=>setText(text)}/>
                <Button title='Add me' onPress={addItem}></Button>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    align: {
      alignSelf: "center",
    },
    font: {
      fontSize: 20,
      fontWeight: "bold",
    },
    input: {
      borderRadius: 5,
      borderWidth: 1,
      marginBottom: 8,
      padding: 8,
    },
  });

export default List;
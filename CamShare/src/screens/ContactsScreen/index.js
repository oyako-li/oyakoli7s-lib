import React from "react";
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
} from 'react-native';
import { useNavigation } from "@react-navigation/core";
import dummyContacts from '../../../assets/data/contacts.json';
// import CallignScreen from "../CallingScreen";

const navigator = useNavigation();

const ContactsScreen = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [filteredContacts, setFilteredContacts] = React.useState(dummyContacts);
    
    React.useEffect(()=>{
        const newContacts = dummyContacts.filter(contact => 
            contact.user_display_name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()),
        );
        setFilteredContacts(newContacts);
    }, [searchTerm]);

    const callUser = (user) => {
        navigator.navigate("CallingScreen", {user});
    }

    return (
    <View style={styles.page}>
        <TextInput 
            value={searchTerm}
            onChangeText={setSearchTerm}
            style={styles.searchInput}
            placeholder="Search..." 
        />
        <FlatList 
            data={filteredContacts}
            renderItem={({item})=>(
                <Pressable onPress={() => callUser(item)}>
                    <Text style={styles.contactName}>{item.user_display_name}</Text>
                </Pressable>
            )}
            ItemSeparatorComponent={()=><View style={styles.separator}/>}
        />
    </View>
    )
};


const styles = StyleSheet.create({
    page: {
        padding: 15,
        backgroundColor: 'white',
        flex:1,
    },
    contactName: {
        fontSize: 16,
        marginVertical: 10,
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#f0f0f0',
    },
    searchInput: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
    },
});

export default ContactsScreen;
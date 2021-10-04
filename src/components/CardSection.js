import React from 'react';
import { View } from 'react-native';


const CardSection = (props) =>{
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding:5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
         font-size: 12px;
          background: url('drums.jpg') top center;
          background-size: 80%;
    }

};


export default CardSection


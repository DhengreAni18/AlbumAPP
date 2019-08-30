import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {

    const {title , artist , thumbnail_image } = album;

   return (
       <Card>
           <CardSection>
               <View>
                   <Image style = {styles.imageStyle} source = {{ uri: thumbnail_image }} />
               </View>
               <View style = { styles.headerStyle} >
               <Text>{title}</Text>
               <Text>{artist}</Text>     
               </View>
           
           </CardSection>
       </Card>
   );
};


const styles = {
    headerStyle : {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    imageStyle: {
        height:50,
        width:50
    }
};



export default AlbumDetail;
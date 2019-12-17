import {StyleSheet} from 'react-native';
import controller from '../../components/controller/controller';

export default StyleSheet.create({
    container: {
        alignSelf:'center',
        alignItems:'center',
        justifyContent: 'center',
        width:controller.w276,
        height:40,
        backgroundColor:'#279Bff',
        borderRadius:4
    },
    btnText:{
        fontSize:22,
        fontFamily:'Ubuntu-Regular',
        color:'#ffff'
    },
});
import React from 'react';
import {
    Button,
    Image,
    View,
    Text
} from 'react-native';
 
class ChatScreen extends React.Component {
    static navigationOptions = {
        title:'聊天',
        
        // header: (navigation, defaultHeader) => ({
        //     style:{
        //         backgroundColor: 'skyblue'
        //     },
        //     visible: true  // 覆盖预设中的此项
        // }),
        headerStyle :{
            // backgroundColor: 'skyblue',
            elevation: 77, //设置顶部安卓阴影，可是失效了，
            shadowOpacity: 0,//安卓阴影
            borderBottomWidth: 1,//border宽度
            borderColor:'skyblue'//border样式
        },
    };
 
    render() {
        const {params} = this.props.navigation.state;
        return (
        <View style={{backgroundColor:'#fff',flex:1}}>
            <Text style={{padding:20}}>Chat with {params.user}</Text>
 
        </View>
 
        );
    }
}
export default ChatScreen;

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image
} from 'react-native';
 
class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        title:'通知',
        drawerLabel: '通知',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../imgs/demo.svg')}
                style={[styles.tabIcon, {tintColor: tintColor}]}
            />
        ),
    };
 
    render() {
        return (
             <View style={{backgroundColor:'#fff'}}>
                <Button
                    style={{padding:20,margin:10}}
                    onPress={() => this.props.navigation.openDrawer()}
                    title="点击打开侧滑菜单"
                />
                
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="返回我的界面"
                />
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    tabIcon: {
        width: 24,
        height: 24,
    },
});
 
export default MyNotificationsScreen;

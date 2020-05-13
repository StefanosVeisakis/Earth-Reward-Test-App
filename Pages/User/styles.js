import {
    StyleSheet,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    body: {
        backgroundColor: Colors.white,
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    number: {
        borderWidth: 1,
        borderColor: '#000',
        fontSize: 16,
        padding: 30,
        margin: 10,
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
    },
});

export default styles;
import { StyleSheet, Text, View } from "react-native";
export default function StatBlock({ title, count }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.count}>{count}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        color: 'grey',
        fontSize: 18,

    },
    count: {
        fontSize: 30,
    }
})
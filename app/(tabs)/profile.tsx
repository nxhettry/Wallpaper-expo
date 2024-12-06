import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Profile() {
    return (
        <View >
            <Text>Profileage</Text>
            <Link href="/AccountInfo">
                Account info
            </Link>
        </View>
    );
}
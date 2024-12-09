import { ThemedSafeArea } from "@/components/ThemedSafeArea";
import { Link } from "expo-router";
import { Text } from "react-native";

export default function Profile() {
    return (
        <ThemedSafeArea >
            <Text>Profileage</Text>
            <Link href="/AccountInfo">
                Account info
            </Link>
        </ThemedSafeArea>
    );
}
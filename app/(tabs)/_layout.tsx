import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    //Here the screenOptions prop is used to set the active tab color to blue
    //and hide the header in the tab layout
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerShown: false,
      }}
    >
      {/* Define each button and screen as this code block, also explore different properties from the docs */}
      <Tabs.Screen
        name="index" // Here the title must match with the name of the file in the (tab) folder
        options={{
          title: "For You", //Title of the tab that will be displayed
          tabBarIcon: ({ color }) => {
            return <FontAwesome name="home" size={24} color={color} />; //Icon of the tab that will be displayed
          },
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => {
            return <FontAwesome name="cog" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => {
            return <FontAwesome name="cog" size={24} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}

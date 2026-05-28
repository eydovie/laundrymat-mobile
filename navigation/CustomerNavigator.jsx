import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "../context/ThemeContext";
import HomeScreen from "../screens/Customer/HomeScreen";
import ServicesScreen from "../screens/Customer/ServicesScreen";
import BookingScreen from "../screens/Customer/BookingScreen";
import TrackOrderScreen from "../screens/Customer/TrackOrderScreen";
import ProfileScreen from "../screens/Customer/ProfileScreen";

// We use text as tab icons since lucide-react-native
// needs extra native setup — swap for icons later
const Tab = createBottomTabNavigator();

export default function CustomerNavigator() {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.bgCard,
          borderTopColor: theme.border,
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          height: 65,
        },
        tabBarActiveTintColor: theme.accent,
        tabBarInactiveTintColor: theme.textMuted,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "600",
          marginTop: 2,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: "Home", tabBarIcon: () => null }}
      />
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{ tabBarLabel: "Services", tabBarIcon: () => null }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{ tabBarLabel: "Book Now", tabBarIcon: () => null }}
      />
      <Tab.Screen
        name="Track"
        component={TrackOrderScreen}
        options={{ tabBarLabel: "Track", tabBarIcon: () => null }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: "Profile", tabBarIcon: () => null }}
      />
    </Tab.Navigator>
  );
}

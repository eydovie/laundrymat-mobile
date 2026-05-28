import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "../context/ThemeContext";
import DashboardScreen from "../screens/Admin/DashboardScreen";
import BookingsScreen from "../screens/Admin/BookingsScreen";
import BookingDetailScreen from "../screens/Admin/BookingDetailScreen";
import UpdateStatusScreen from "../screens/Admin/UpdateStatusScreen";

const Stack = createStackNavigator();

export default function AdminNavigator() {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.bgCard,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: theme.border,
        },
        headerTintColor: theme.text,
        headerTitleStyle: {
          fontWeight: "700",
          fontSize: 16,
        },
        cardStyle: { backgroundColor: theme.bg },
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ title: "LaundryMart Admin" }}
      />
      <Stack.Screen
        name="Bookings"
        component={BookingsScreen}
        options={{ title: "All Bookings" }}
      />
      <Stack.Screen
        name="BookingDetail"
        component={BookingDetailScreen}
        options={{ title: "Booking Details" }}
      />
      <Stack.Screen
        name="UpdateStatus"
        component={UpdateStatusScreen}
        options={{ title: "Update Status" }}
      />
    </Stack.Navigator>
  );
}

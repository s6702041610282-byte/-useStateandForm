import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: styles.header,
        headerTintColor: "#0CA678", 
        headerTitleStyle: styles.headerTitle,
        headerShadowVisible: false,
        
        tabBarActiveTintColor: "#f35c96",
        tabBarInactiveTintColor: "#66A291",
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarLabelPosition: "below-icon", 
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Counter",
          tabBarLabel: "Counter",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabWrapper, focused && styles.tabWrapperActive]}>
              <View style={[styles.iconButton, focused && styles.iconButtonActive]}>
                <Text style={[styles.tabEmoji, { fontSize: focused ? 24 : 20 }]}>🐚</Text>
              </View>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="arith"
        options={{
          title: "Calculator",
          tabBarLabel: "Calculator",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabWrapper, focused && styles.tabWrapperActive]}>
              <View style={[styles.iconButton, focused && styles.iconButtonActive]}>
                <Text style={[styles.tabEmoji, { fontSize: focused ? 24 : 20 }]}>🐠</Text>
              </View>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="form"
        options={{
          title: "Form",
          tabBarLabel: "Form",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabWrapper, focused && styles.tabWrapperActive]}>
              <View style={[styles.iconButton, focused && styles.iconButtonActive]}>
                <Text style={[styles.tabEmoji, { fontSize: focused ? 24 : 20 }]}>👑</Text>
              </View>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#EBFBFA", 
    borderBottomWidth: 1,
    borderBottomColor: "rgba(12, 166, 120, 0.15)",
  },
  headerTitle: {
    fontWeight: "900",
    fontSize: 19,
    letterSpacing: 0.8,
  },
  tabBar: {
    backgroundColor: "#FFFFFF", 
    borderTopWidth: 1,
    borderTopColor: "rgba(195, 242, 229, 0.5)",
    
    height: 82, 
    paddingTop: 4,
    paddingBottom: 14, 
    
    shadowColor: "#0CA678",
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 10,
  },
  tabWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 40,
  },
  tabWrapperActive: {
    position: "absolute",
    top: -24, 
  },
  iconButton: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  iconButtonActive: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#ff9fdf", 
    borderWidth: 3,
    borderColor: "#FFFFFF", 
    
    shadowColor: "#f35c96",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  tabEmoji: {
    textAlign: "center",
  },
  tabBarLabel: {
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 0.3,
    textAlign: "center",
    marginTop: 10, 
  },
});
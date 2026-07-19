import { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Form() {
  const depts = [
    { label: 'Civil Engineering', value: 'CE' },
    { label: 'Computer Education', value: 'CED' },
    { label: 'Electrical Engineering', value: 'EE' },
    { label: 'Mechanical Engineering', value: 'ME' },
  ];

  const [data, setData] = useState({
    name: "",
    gender: 'Female',
    dept: 'CED',
    comment: 'sdsdsdd',
    isAgree: true,
  });

  const [showDeptMenu, setShowDeptMenu] = useState(false);

  const handleSubmit = () => {
    if (!data.name.trim()) {
      Alert.alert("แจ้งเตือน", "กรุณากรอกชื่อ Full Name ก่อนส่งข้อมูลนะ ✦");
      return;
    }
    if (!data.isAgree) {
      Alert.alert("แจ้งเตือน", "กรุณากด ยอมรับเงื่อนไข ก่อนส่งข้อมูลครับ");
      return;
    }
    Alert.alert(
      "✦ Registration Success ✦",
      `Name: ${data.name}\nGender: ${data.gender}\nDept: ${data.dept}\nComment: ${data.comment}`
    );
  };

  const handleReset = () => {
    setData({
      name: "",
      gender: '',
      dept: '',
      comment: '',
      isAgree: false,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#E8F8F5" />
      
     
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.formContainer} showsVerticalScrollIndicator={false}>

          <View style={styles.displayCard}>
            <View style={styles.previewHeader}>
              <Text style={styles.displayTitle}>✦ LIVE PREVIEW ✦</Text>
            </View>
            <View style={styles.previewBody}>
              <View style={styles.previewRow}><Text style={styles.boldText}>Name:</Text><Text style={styles.previewValue}>{data.name || '-'}</Text></View>
              <View style={styles.previewRow}><Text style={styles.boldText}>Gender:</Text><Text style={styles.previewValue}>{data.gender || '-'}</Text></View>
              <View style={styles.previewRow}><Text style={styles.boldText}>Dept:</Text><Text style={styles.previewValue}>{depts.find(d => d.value === data.dept)?.label || '-'}</Text></View>
              <View style={styles.previewRow}><Text style={styles.boldText}>Comment:</Text><Text style={styles.previewValue} numberOfLines={1}>{data.comment || '-'}</Text></View>
              <View style={[styles.previewRow, { borderBottomWidth: 0 }]}><Text style={styles.boldText}>Agree:</Text><Text style={styles.previewValue}>{data.isAgree ? 'Yes' : 'No'}</Text></View>
            </View>
          </View>

          {/* Input: Full Name */}
          <View style={styles.inputBlock}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={data.name}
              onChangeText={(text) => setData({ ...data, name: text })}
              placeholder='Enter your name'
              placeholderTextColor="#A0AEC0"
            />
          </View>

          <View style={styles.inputBlock}>
            <Text style={styles.label}>Gender</Text>
            <View style={styles.radioGroup}>
              {['Male', 'Female'].map((g) => (
                <TouchableOpacity
                  key={g}
                  style={[
                    styles.radioItem,
                    data.gender === g && styles.radioItemActive
                  ]}
                  onPress={() => setData({ ...data, gender: g })}
                  activeOpacity={0.9}
                >
                  <View style={[
                    styles.radioCircle,
                    data.gender === g && styles.radioCircleActive
                  ]}>
                    {data.gender === g && <View style={styles.radioInnerCircle} />}
                  </View>
                  <Text style={[styles.radioLabel, data.gender === g && styles.radioLabelActive]}>{g}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.inputBlock}>
            <Text style={styles.label}>Department</Text>
            <TouchableOpacity 
              style={[styles.dropdownTrigger, showDeptMenu && styles.dropdownTriggerOpen]}
              onPress={() => setShowDeptMenu(!showDeptMenu)}
              activeOpacity={0.9}
            >
              <Text style={[styles.dropdownTriggerText, data.dept && styles.dropdownSelectedText]}>
                {depts.find(d => d.value === data.dept)?.label || 'Select Department'}
              </Text>
              <Text style={styles.dropdownArrow}>{showDeptMenu ? '▲' : '▼'}</Text>
            </TouchableOpacity>

            {showDeptMenu && (
              <View style={styles.customDropdownContainer}>
                {depts.map((item) => (
                  <TouchableOpacity
                    key={item.value}
                    style={[
                      styles.dropdownItem,
                      data.dept === item.value && styles.dropdownItemActive
                    ]}
                    onPress={() => {
                      setData({ ...data, dept: item.value });
                      setShowDeptMenu(false);
                    }}
                  >
                    <Text style={[styles.dropdownItemText, data.dept === item.value && styles.dropdownItemTextActive]}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Input: Comment */}
          <View style={styles.inputBlock}>
            <Text style={styles.label}>Comment</Text>
            <TextInput
              style={[styles.input, styles.commentInput]}
              multiline
              numberOfLines={3}
              value={data.comment}
              onChangeText={(text) => setData({ ...data, comment: text })}
              placeholder='Enter your comment'
              placeholderTextColor="#A0AEC0"
              textAlignVertical="top"
            />
          </View>


          <View style={styles.switchContainer}>
            <View style={styles.switchTextGroup}>
              <Text style={styles.switchTitle}>Accept Terms & Conditions</Text>
              <Text style={styles.switchSubtitle}>I agree to the privacy policy</Text>
            </View>
            <Switch
              trackColor={{ true: '#FFB085', false: '#E9ECEF' }}
              thumbColor={data.isAgree ? '#FF7A38' : '#CED4DA'}
              ios_backgroundColor="#E9ECEF"
              value={data.isAgree}
              onValueChange={(value) => setData({ ...data, isAgree: value })}
            />
          </View>

          <View style={styles.actionButtonGroup}>
            <TouchableOpacity style={[styles.btn, styles.resetBtn]} onPress={handleReset} activeOpacity={0.8}>
              <Text style={styles.resetBtnText}>RESET</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, styles.submitBtn]} onPress={handleSubmit} activeOpacity={0.85}>
              <Text style={styles.submitBtnText}>SUBMIT REGISTRY</Text>
            </TouchableOpacity>
          </View>
          
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#E8F8F5",
  },
  keyboardView: {
    flex: 1,
  },
  mainHeader: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 4,
    backgroundColor: "#E8F8F5",
  },
  mainHeaderTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#056445",
    letterSpacing: 0.5,
  },
  headerLine: {
    height: 1.5,
    backgroundColor: "#CDEFEA",
    marginTop: 12,
    borderRadius: 1,
  },
  formContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 60,
  },
  inputBlock: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "800",
    color: "#0A3C36",
    marginBottom: 8,
    marginLeft: 4,
    letterSpacing: 0.3,
  },
  input: {
    height: 54,
    borderColor: "#BEECE5",
    borderWidth: 1.5,
    borderRadius: 16,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
    color: "#2D3748",
  },
  commentInput: {
    height: 90,
    paddingTop: 14,
    paddingBottom: 14,
  },
  displayCard: {
    backgroundColor: "#F9F6FF",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#E5DBFF",
    marginBottom: 24,
    overflow: "hidden",
  },
  previewHeader: {
    backgroundColor: "#F3EFFE",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1.5,
    borderColor: "#E5DBFF",
  },
  displayTitle: {
    fontSize: 12,
    fontWeight: "900",
    color: "#5B21B6",
    letterSpacing: 1.5,
  },
  previewBody: {
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  previewRow: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#F3EFFE",
    alignItems: "center",
  },
  boldText: {
    width: 75,
    fontWeight: "800",
    color: "#6D28D9",
    fontSize: 13,
  },
  previewValue: {
    flex: 1,
    color: "#4C1D95",
    fontSize: 13,
    fontWeight: "600",
  },
  radioGroup: {
    flexDirection: "row",
    gap: 16,
  },
  radioItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    height: 54,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#BEECE5",
  },
  radioItemActive: {
    borderColor: "#FF9E79",
    backgroundColor: "#FFF8F5",
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#BEECE5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  radioCircleActive: {
    borderColor: "#FF9E79",
  },
  radioInnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FF9E79",
  },
  radioLabel: {
    fontSize: 15,
    fontWeight: "700",
    color: "#718096",
  },
  radioLabelActive: {
    color: "#FF9E79",
  },
  dropdownTrigger: {
    height: 54,
    borderColor: "#BEECE5",
    borderWidth: 1.5,
    borderRadius: 16,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownTriggerOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderColor: "#056445",
  },
  dropdownTriggerText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2D3748",
  },
  dropdownSelectedText: {
    color: "#2D3748",
    fontWeight: "600",
  },
  dropdownArrow: {
    fontSize: 12,
    color: "#056445",
    fontWeight: "700",
  },
  customDropdownContainer: {
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderWidth: 1.5,
    borderColor: "#056445",
    borderTopWidth: 0,
    overflow: "hidden",
  },
  dropdownItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0FDFA",
  },
  dropdownItemActive: {
    backgroundColor: "#E8F8F5",
  },
  dropdownItemText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#4A5568",
  },
  dropdownItemTextActive: {
    color: "#056445",
    fontWeight: "700",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#BEECE5",
    marginBottom: 28,
  },
  switchTextGroup: {
    flex: 1,
    paddingRight: 8,
  },
  switchTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#0A3C36",
  },
  switchSubtitle: {
    fontSize: 12,
    color: "#718096",
    fontWeight: "500",
    marginTop: 2,
  },
  actionButtonGroup: {
    flexDirection: "row",
    gap: 12,
    marginTop: 4,
  },
  btn: {
    height: 54,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  resetBtn: {
    flex: 1.2,
    backgroundColor: "#FFECE5",
    borderWidth: 1.5,
    borderColor: "#FFD5C4",
  },
  resetBtnText: {
    color: "#FF7A38",
    fontWeight: "800",
    fontSize: 14,
    letterSpacing: 0.5,
  },
  submitBtn: {
    flex: 2,
    backgroundColor: "#B39DFF",
  },
  submitBtnText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 14,
    letterSpacing: 0.5,
  },
});
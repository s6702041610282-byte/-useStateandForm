import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Arith() {
  const [x, setX] = useState<string>("");
  const [y, setY] = useState<string>("");
  const [result, setResult] = useState<string>("0");

  const getNumbers = () => {
    const numX = parseFloat(x) || 0;
    const numY = parseFloat(y) || 0;
    return { numX, numY };
  };

  const handleAdd = () => {
    const { numX, numY } = getNumbers();
    setResult(String(numX + numY));
  };

  const handleSub = () => {
    const { numX, numY } = getNumbers();
    setResult(String(numX - numY));
  };

  const handleMul = () => {
    const { numX, numY } = getNumbers();
    setResult(String(numX * numY));
  };

  const handleDiv = () => {
    const { numX, numY } = getNumbers();
    if (numY === 0) {
      setResult("Error");
    } else {
      setResult(String((numX / numY).toFixed(4).replace(/\.?0+$/, "")));
    }
  };

  const handleReset = () => {
    setX("");
    setY("");
    setResult("0");
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        <View style={styles.screenCard}>
          <Text style={styles.screenLabel}>CALCULATED RESULT</Text>
          <Text style={styles.screenResult} numberOfLines={1} adjustsFontSizeToFit>
            {result}
          </Text>
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.fieldBox}>
            <Text style={styles.fieldLabel}>Number 1</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              value={x}
              onChangeText={setX}
              placeholder="0.00"
              placeholderTextColor="#A0AEC0"
            />
          </View>

          <View style={styles.fieldBox}>
            <Text style={styles.fieldLabel}>Number 2</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              value={y}
              onChangeText={setY}
              placeholder="0.00"
              placeholderTextColor="#A0AEC0"
            />
          </View>
        </View>

        <View style={styles.keyboardSection}>
          <View style={styles.row}>
            <TouchableOpacity style={[styles.opBtn, styles.mintBtn]} onPress={handleAdd} activeOpacity={0.85}>
              <Text style={styles.mintBtnText}>+</Text>
              <Text style={styles.opBtnSubDark}>ADD</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.opBtn, styles.mintBtn]} onPress={handleSub} activeOpacity={0.85}>
              <Text style={styles.mintBtnText}>−</Text>
              <Text style={styles.opBtnSubDark}>SUB</Text>
            </TouchableOpacity>
          </View>

          {/* แถวที่ 2 */}
          <View style={styles.row}>
            <TouchableOpacity style={[styles.opBtn, styles.mintBtn]} onPress={handleMul} activeOpacity={0.85}>
              <Text style={styles.mintBtnText}>×</Text>
              <Text style={styles.opBtnSubDark}>MUL</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.opBtn, styles.mintBtn]} onPress={handleDiv} activeOpacity={0.85}>
              <Text style={styles.mintBtnText}>÷</Text>
              <Text style={styles.opBtnSubDark}>DIV</Text>
            </TouchableOpacity>
          </View>

          {/* ปุ่ม RESET สีแดงส้มพาสเทลละมุนตาคงเดิมไว้เพื่อให้แยกหมวดหมู่ชัดเจน */}
          <TouchableOpacity style={styles.clearBtn} onPress={handleReset} activeOpacity={0.8}>
            <Text style={styles.clearBtnText}>RESET</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F8F5", 
  },
  scrollContainer: {
    padding: 24,
    paddingBottom: 40,
  },
  screenCard: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: "flex-end",
    marginBottom: 24,
    borderWidth: 1.5,
    borderColor: "#CDEFEA", 
    shadowColor: "#056445",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  screenLabel: {
    fontSize: 11,
    fontWeight: "800",
    color: "#056445", 
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  screenResult: {
    fontSize: 42,
    fontWeight: "700",
    color: "#5c3f50", 
  },
  inputGroup: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,
  },
  fieldBox: {
    flex: 1,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: "#056445",
    marginBottom: 8,
    marginLeft: 4,
  },
  textInput: {
    height: 56,
    backgroundColor: "#FFFFFF",
    borderColor: "#CDEFEA",
    borderWidth: 1.5,
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 18,
    fontWeight: "600",
    color: "#2D3748",
  },
  keyboardSection: {
    gap: 12,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  opBtn: {
    flex: 1,
    height: 76,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#056445",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },

  mintBtn: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#CDEFEA",
  },
  mintBtnText: {
    fontSize: 26,
    fontWeight: "700",
    color: "#056445", 
  },
  opBtnSubDark: {
    fontSize: 10,
    fontWeight: "800",
    color: "#94A3B8",
    marginTop: 2,
  },

  clearBtn: {
    height: 56,
    backgroundColor: "#FF8A8A",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
    shadowColor: "#FF8A8A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  clearBtnText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 14,
    letterSpacing: 0.8,
  },
});
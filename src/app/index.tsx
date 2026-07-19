import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardSubtitle}>✦ Secret Treasure Count ✦</Text>
        
        {/* วงกลมสไตล์ไข่มุกกลมมน */}
        <View style={styles.pearlOuter}>
          <View style={styles.pearlInner}>
            <Text style={styles.countNumber}>{count}</Text>
          </View>
        </View>

        {/* ปุ่มสีพาสเทลสดใสสไตล์ใต้ทะเล */}
        <View style={styles.controlWrapper}>
          <TouchableOpacity 
            style={[styles.actionBtn, styles.minusBtn]} 
            onPress={() => setCount(count - 1)}
            activeOpacity={0.8}
          >
            <Text style={styles.btnText}>−</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.actionBtn, styles.plusBtn]} 
            onPress={() => setCount(count + 1)}
            activeOpacity={0.8}
          >
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.resetBtn} 
          onPress={() => setCount(0)}
          activeOpacity={0.7}
        >
          <Text style={styles.resetText}>✧ Clear Mermaid Magic ✧</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBFBFA", // ฟ้าน้ำทะเลสว่างสดใส
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 36, // โค้งมนนุ่มฟู
    paddingHorizontal: 24,
    paddingVertical: 36,
    width: "100%",
    maxWidth: 340,
    alignItems: "center",
    shadowColor: "#0CA678",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 6,
    borderWidth: 3,
    borderColor: "#C3F2E5",
  },
  cardSubtitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#0CA678", // เขียวมินต์เข้ม
    letterSpacing: 1,
    marginBottom: 24,
  },
  pearlOuter: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#E8F4FD", // สีฟ้าไข่มุกเงา
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
    borderWidth: 4,
    borderColor: "#D0EBFF",
    shadowColor: "#228BE6",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  pearlInner: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  countNumber: {
    fontSize: 54,
    fontWeight: "800",
    color: "#E8590C", // สีส้มแดงสดใสโทนผมแอเรียล
  },
  controlWrapper: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 20,
    width: "100%",
  },
  actionBtn: {
    flex: 1,
    height: 56,
    borderRadius: 28, // ปุ่มทรงรีน่ารัก
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  plusBtn: {
    backgroundColor: "#B197FC", // สีม่วงลาเวนเดอร์ (สัญลักษณ์เปลือกหอย)
  },
  minusBtn: {
    backgroundColor: "#FF8787", // สีชมพูปะการังพาสเทล
  },
  btnText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  resetBtn: {
    width: "100%",
    height: 48,
    backgroundColor: "#E6FCF5",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#96F2D7",
  },
  resetText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#0CA678",
    letterSpacing: 0.5,
  },
});
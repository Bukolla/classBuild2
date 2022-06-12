import React from 'react'
import { StyleSheet, Text, View, Dimension, TextInput, Image, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: "left",
    paddingLeft: 10,
  },
  image: {
    width: 300,
    height: 40,
    backgroundColor: "brown",
    marginTop: 20,
    marginBottom: 20,
  },
  box: {
    width: 200,
    marginTop: 5,
  },
    box1: {
      width: 200,
      marginTop: 5,
      flexDirection: "row",
      justifyContent: "center",
    },
    input: {
      width: 300,
      height: 40,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "blue",
      marginTop: 5,
      fontFamily: "Raleway",
    },
    text: {
      fontFamily: "Raleway",
      fontWeight: "bold",
      color: "white",
    },
    text1: {
      fontFamily: "Raleway",
      fontWeight: "bold",
      color: "gray",
    },
    button: {
      width: 300,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "blue",
      borderRadius: 5,
    }

  });

const SignUp = () => {
  const url = "./assets/image/21.jpg";
  
  return (
    <View style={styles.container}>
      <Image style={styles.image} />

      <View style={styles.box}>
        <Text>User Name</Text>
        <TextInput placeholder="username" style={styles.input} />
      </View>

      <View style={styles.box}>
        <Text>Email</Text>
        <TextInput placeholder="email" style={styles.input} />
      </View>

      <View style={styles.box}>
        <Text>Password</Text>
        <TextInput placeholder="password" style={styles.input} />
      </View>

      <View style={styles.box}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box1}>
        <Text> Want a Cool account? </Text>
        <TouchableOpacity>
          {/* <Text style={styles.text1}
            onPress={() => {
              navigation.push("");
            }}
          >Click</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUp

// const styles = StyleSheet.create({})

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef, useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  SectionList,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

const App = ({ showsAlphabet = true }) => {

  let sectionList = useRef();

  const DATA = [
    {
      title: "a",
      data: ["apple", "aicon", "atever"],
    },
    {
      title: "b",
      data: ["banana", "boleh", "bb"]
    },
    {
      title: "c",
      data: ["can", "cannot", "chill"],
    },
    {
      title: "d",
      data: ["dan", "dannot", "dhill"],
    },
    {
      title: "e",
      data: ["ean", "eannot", "ehill"],
    },
    {
      title: "f",
      data: ["fan", "fannot", "fhill"],
    },
    {
      title: "g",
      data: ["gan", "gannot", "ghill"],
    },
    {
      title: "h",
      data: ["han", "hannot", "hhill"],
    },
    {
      title: "i",
      data: ["ian", "iannot", "ihill"],
    },
    {
      title: "j",
      data: ["jan", "jannot", "jhill"],
    },
    {
      title: "k",
      data: ["kan", "kannot", "khill"],
    },
  ];

  const grabAllAlphabet = () => {
    let alphabet = [];
    DATA.forEach((data, _) => {
      alphabet.push(data.title);
    });
    return alphabet;
  }

  const renderItem = (contact) => {
    return (
      <View style={{ height: 30 }}>
        <Text style={{ fontSize: 12 }}>{contact}</Text>
      </View>
    )
  }
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ backgroundColor: 'red' }}
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
          renderItem={({ item }) => renderItem(item)}
          ref={sectionList}
        />
        {
          showsAlphabet &&
          (
            <View style={styles.alphabetContainer}>
              {
                grabAllAlphabet()?.map((data, index) => {
                  return (
                    <TouchableWithoutFeedback onPress={() => sectionList.current.scrollToLocation({ sectionIndex: index, itemIndex: 0 })}>
                      <Text style={{ fontSize: 20 }}>{data}</Text>
                    </TouchableWithoutFeedback>
                  )
                })
              }
            </View>
          )
        }
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    backgroundColor: "#fff"
  },
  alphabetContainer: {
    position: 'absolute',
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }
});

export default App;

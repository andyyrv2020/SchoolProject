import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function EventCard({eventItem}) {
    return(
        <View style = {styles.card}>

            <View style = {styles.cardHeader}>
                <Text style = {styles.title}>{eventItem.title}</Text>
                <View style = {styles.cardSubjects}>
                <Text style = {styles.subject1}>{eventItem.subject1}</Text>
                <Text style = {styles.subject2}>{eventItem.subject2}</Text>
                <Text style = {styles.subject3}>{eventItem.subject3}</Text>
                <Text style = {styles.subject4}>{eventItem.subject4}</Text>
                <Text style = {styles.subject5}>{eventItem.subject5}</Text>
                <Text style = {styles.subject6}>{eventItem.subject6}</Text>
                <Text style = {styles.subject7}>{eventItem.subject7}</Text>
            </View>
            <View style = {styles.cardClasses}>
            <Text style = {styles.class1}>{eventItem.class1}</Text>
                <Text style = {styles.class2}>{eventItem.class2}</Text>
                <Text style = {styles.class3}>{eventItem.class3}</Text>
                <Text style = {styles.class4}>{eventItem.class4}</Text>
                <Text style = {styles.class5}>{eventItem.class5}</Text>
                <Text style = {styles.class6}>{eventItem.class6}</Text>
                <Text style = {styles.class7}>{eventItem.class7}</Text>
            </View>
            <View style = {styles.cardSchedule}>
                <Text style = {styles.schedule1}>{eventItem.schedule1}</Text>
                <Text style = {styles.schedule2}>{eventItem.schedule2}</Text>
                <Text style = {styles.schedule3}>{eventItem.schedule3}</Text>
                <Text style = {styles.schedule4}>{eventItem.schedule4}</Text>
                <Text style = {styles.schedule5}>{eventItem.schedule5}</Text>
                <Text style = {styles.schedule6}>{eventItem.schedule6}</Text>
                <Text style = {styles.schedule7}>{eventItem.schedule7}</Text>
            </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
card: {
    alignItems: 'center',
    backgroundColor: '#2D6C8C', //.dark aquamarine
     opacity: 1.7,
     flex: 1,
     width: 600,
     flexDirection: 'center',
     borderWidth: 4,
     borderRadius: 100,
     borderColor: "#1A188F", //.dark  blue
     margin: 10
},
 cardHeader: {
     flex: 1,
     padding: 10,
     justifyContent: 'center',
     alignItems: 'center',
     flexDirection: 'center'
 },
 cardClasses: {
    backgroundColor: '#2D6C8C', //.baby blue
    opacity: 1.7,
    flex: 1,
    position: 'fixed',
    left: 180,
    margin: 20,
    marginBottom: 1
},
cardSchedule: {
    backgroundColor: '#2D6C8C', //.baby blue
    opacity: 1.7,
    flex: 1,
    position: 'fixed',
    left: 70,
    margin: 20,
    marginBottom: 1
},

 cardSubjects: {
    backgroundColor: '#2D6C8C', //.baby blue
    opacity: 1.7,
    flex: 1,
    left: 30,
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginBttom: 10
 }
});
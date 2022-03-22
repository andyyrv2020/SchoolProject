import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { FlatList } from 'react-native';
import EventCard from './EventCard';

class EventList extends Component {
    state = {
        events: []   
     }

    componentDidMount() {
        const events = require('./data.json').events;
        this.setState( {events} );
    }

    render() {
        return(
            <FlatList
                data = { this.state.events }
                renderItem = {({item}) => <EventCard eventItem={item}/>}
                ></FlatList>
        );
    };
};

export default EventList;
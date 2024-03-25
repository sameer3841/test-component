import React,{useState} from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import PrimaryButton from '../../components/PrimaryButton'
import TimePicker from 'react-time-picker';
import {styles} from './styles'

const days = [
    {title: 'S', active: false},
    {title: 'M', active: true},
    {title: 'T', active: true},
    {title: 'W', active: false},
    {title: 'T', active: false},
    {title: 'F', active: false},
    {title: 'S', active: true},
  ];

export const Reminders = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(true);

    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };

  return (
    <View style= {styles.container}>
    <View style= {styles.headingWrapper}>
        <Text style={styles.heading}>What time do you need</Text>
        <Text style={styles.heading}>to take your medication?</Text>
    </View>
    <View style={styles.timePicker}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
    </View>
    <View style= {styles.headingWrapper}>
        <Text style={styles.heading}>Which days do you need</Text>
        <Text style={styles.heading}>to take your medication?</Text>
    </View>
    <View style={styles.dayContainer}>
        {days.map((item, index) => {
          return (
            <TouchableOpacity
              style={[
                styles.dayItem,
                {
                  backgroundColor: item.active
                    ? 'white'
                    : '#003006',
                },
              ]}>
              <Text
                style={[
                  styles.dayTitle,
                  {color: item.active ? '#003006' : 'white',
                },
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  )
}


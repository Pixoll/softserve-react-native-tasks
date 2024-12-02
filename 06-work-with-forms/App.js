import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Controller, useForm } from "react-hook-form";
import { Button, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { sendData } from "./services/sendDate";

export default function App() {
    const { control, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [showCheckInPicker, setShowCheckInPicker] = useState(false);
    const [showCheckOutPicker, setShowCheckOutPicker] = useState(false);
    const [roomType, setRoomType] = useState("Standard");
    const [dateError, setDateError] = useState("");

    const validateDates = (checkIn, checkOut) => {
        if (checkOut && (checkOut.getTime() <= checkIn.getTime() || checkIn.getTime() >= checkOut.getTime())) {
            setDateError("The Check-Out Date must be later than the Check-In Date");
        } else {
            setDateError("");
        }
    };

    const onSubmit = data => {
        if (dateError) {
            setError("checkOutDate", {
                type: "manual",
                message: dateError
            });
        } else {
            clearErrors("checkOutDate");
            sendData({
                ...data,
                checkInDate,
                checkOutDate,
                roomType: roomType.toLowerCase(),
            });
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.formHeader}>Booking form</Text>
                <Text style={styles.formTitle}>Name</Text>
                <Controller
                    control={control}
                    rules={{
                        required: "Name is required",
                        pattern: {
                            value: /^[A-Z][a-zA-Z]{2,}$/,
                            message: "Name must start with a capital letter and contain at least 3 characters"
                        }
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            testID="user-name-input"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="userName"
                />
                {errors.userName && <Text style={styles.errorText}>{errors.userName.message}</Text>}

                <Text style={styles.formTitle}>Email</Text>
                <Controller
                    control={control}
                    rules={{
                        required: "e-mail is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email address. Please enter a valid email"
                        }
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            testID="email-input"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="email"
                />
                {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

                <Text style={styles.formTitle}>Check-In Date</Text>
                <Button onPress={() => setShowCheckInPicker(true)} title={checkInDate.toLocaleDateString()}/>
                {showCheckInPicker && (
                    <DateTimePicker
                        testID="date-time-picker"
                        value={checkInDate}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) => {
                            const currentDate = selectedDate || checkInDate;
                            setShowCheckInPicker(false);
                            setCheckInDate(currentDate);
                            validateDates(currentDate, checkOutDate);
                        }}
                    />
                )}
                {errors.checkInDate && <Text style={styles.errorText}>{errors.checkInDate.message}</Text>}

                <Text style={styles.formTitle}>Check-Out Date</Text>
                <Button onPress={() => setShowCheckOutPicker(true)}
                        title={checkOutDate ? checkOutDate.toLocaleDateString() : "Select Date"}/>
                {showCheckOutPicker && (
                    <DateTimePicker
                        testID="date-time-picker"
                        value={checkOutDate || new Date()}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) => {
                            const currentDate = selectedDate || checkOutDate;
                            setShowCheckOutPicker(false);
                            setCheckOutDate(currentDate);
                            validateDates(checkInDate, currentDate);
                        }}
                    />
                )}
                {errors.checkOutDate && <Text style={styles.errorText}>{errors.checkOutDate.message}</Text>}
                {dateError && <Text style={styles.errorText}>{dateError}</Text>}

                <Text style={styles.formTitle}>Choose the room type:</Text>
                <Picker
                    selectedValue={roomType}
                    onValueChange={(itemValue) => setRoomType(itemValue)}
                    accessibilityLabel="room-type-picker"
                >
                    <Picker.Item label="Standard" value="Standard"/>
                    <Picker.Item label="Luxury" value="Luxury"/>
                    <Picker.Item label="Family" value="Family"/>
                </Picker>

                <TouchableOpacity
                    style={{ ...styles.button, marginTop: 50 }}
                    title="Submit"
                    onPress={handleSubmit(onSubmit)}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#ffffff",
        alignSelf: "center",
        width: "100%",
        maxWidth: 600,
    },
    button: {
        backgroundColor: "#0056b3",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
        elevation: 4,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
    formHeader: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: "#0056b3",
        marginBottom: 20,
        marginTop: 20,
    },
    formTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#0056b3",
        marginBottom: 10,
        marginTop: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#cccccc",
        padding: 10,
        borderRadius: 4,
    },
    errorText: {
        color: "red",
    },
});

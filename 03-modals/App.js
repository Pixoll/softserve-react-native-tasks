import { useState } from "react";
import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
    const [cards] = useState([
        { id: 1, title: "Card 1", description: "Description for Card 1" },
        { id: 2, title: "Card 2", description: "Description for Card 2" },
        { id: 3, title: "Card 3", description: "Description for Card 3" },
        { id: 4, title: "Card 4", description: "Description for Card 4" },
    ]);

    const [selectedCard, setSelectedCard] = useState(null);

    const openModal = (card) => setSelectedCard(card);
    const closeModal = () => setSelectedCard(null);

    return (
        <View style={styles.container}>
            {cards.map((card) => (
                <TouchableOpacity key={card.id} onPress={() => openModal(card)} style={styles.card}>
                    <Text>{card.title}</Text>
                </TouchableOpacity>
            ))}

            <Modal visible={!!selectedCard} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {selectedCard && (
                            <>
                                <Text style={styles.modalTitle}>{selectedCard.title}</Text>
                                <Text>{selectedCard.description}</Text>
                                <Button title="Close" onPress={closeModal}/>
                            </>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        padding: 20,
        margin: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
});

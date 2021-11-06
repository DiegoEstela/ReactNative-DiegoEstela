import React, { FC } from "react";
import { Modal, Button, StyleSheet, View, Text } from "react-native";



const ModalComponent: FC = ({ itemSelected, handleConfirmDelete, modalVisible }) => {

    return (
        <Modal animationType="slide" visible={modalVisible} transparent>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalMessage}>¿Queres Eliminar?</Text>
                    <Text style={styles.modalTitle}>{itemSelected.value}</Text>
                    <View>
                        <Button
                            color={'#5f9ea0'}
                            onPress={handleConfirmDelete}
                            title="ELIMINAR"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        padding: 30,
        backgroundColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,

    },
    modalMessage: {
        fontSize: 18,
    },
    modalTitle: {
        fontSize: 30,
        marginTop: 10,
        marginBottom: 20,
    },

});

export default ModalComponent;
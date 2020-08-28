import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'


const BookDetail = () => {
    return (
        <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.containerLeft}>
                        <Text style={styles.title}>Comic Magazine Volume #1</Text>
                        <Text style={styles.subTitle}>By Omar Herrera</Text>
                        <View style={styles.reviewStarContainer}>
                            <FontAwesome name='star' color='orange' size={10} style={{marginRight: 5}}/>
                            <FontAwesome name='star' color='orange' size={10} style={{marginRight: 5}}/>
                            <FontAwesome name='star' color='orange' size={10} style={{marginRight: 5}}/>
                            <FontAwesome name='star' color='orange' size={10} style={{marginRight: 5}}/>
                            <FontAwesome name='star' color='orange' size={10} style={{marginRight: 5}}/>
                            <Text style={styles.reviewScore}>5.0</Text>
                        </View>
                    </View>
                    <View style={styles.options}>
                        <View style={styles.column}>
                            <FontAwesome name='comment' color='grey'/>
                            <Text style={styles.optionText}>See Reviews</Text>
                        </View> 
                        <View style={styles.column}>
                            <FontAwesome name='heart' color='#2956BD'/>
                            <Text style={styles.optionText}>Like</Text>
                        </View> 
                        <View style={styles.column}>
                            <FontAwesome name='external-link' color='grey' style={{marginTop:2}}/>
                            <Text style={styles.optionText}>Share</Text>
                        </View> 
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.title}>About this Book</Text>
                    <Text style={styles.descriptionText}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Text>
                </View>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Read Now</Text>
                </View>
            </View>
            <ImageBackground
                style={styles.bookCover}
                imageStyle={{borderRadius: 5}}
                source={{uri: 'https://as1.ftcdn.net/jpg/02/40/21/60/500_F_240216012_n3bthsN9tm63un37w4QNPYDk7swwH78v.jpg'}}
            >
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    column: {
        flexDirection: 'row'
    }, 
    mainContainer: {
        backgroundColor: '#F6F6F7',
        marginLeft: 30,
        marginTop: 80,
        flex: 1
    },
    headerContainer: {
        padding: 25,
        flex: 1
    },
    descriptionContainer: {
        padding: 25,
        flex: 2
    },
    containerLeft: {
        marginLeft: 110
    },
    title: {
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#B1BCCF',
        marginTop: 10
    },
    reviewStarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    reviewScore: {
        marginLeft: 5,
        color: 'orange'
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 35
    },
    optionText: {
        fontSize: 12,
        marginLeft: 8
    },
    button: {
        backgroundColor: '#2956BD',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        alignSelf: 'flex-end'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12
    },
    bookCover: {
        position: 'absolute',
        top: 0,
        left: 0,
        flex: 0,
        width: 150,
        height: 200,
        marginTop: 10
    },
    descriptionText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#B1BCCF',
        marginTop: 10,
        lineHeight: 20
    }
})


export default BookDetail
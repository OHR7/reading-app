import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons'


const Home = props => {
    return (
        <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
            <View style={styles.homeHeader}> 
                <Text style={styles.headerTitle}>Browse</Text>
                <Text style={styles.headerSubtitle}>Recommended</Text>
            </View>
            <ScrollView 
                style={styles.badgeContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.badge}>
                    <Text adjustsFontSizeToFit style={styles.badgeText}>
                        Economy
                    </Text>
                </View>
                <View style={styles.badge}>
                    <Text adjustsFontSizeToFit style={styles.badgeText}>
                        History
                    </Text>
                </View>
                <View style={styles.badgeActive}>
                    <Text adjustsFontSizeToFit style={styles.badgeTextActive}>
                        Comic
                    </Text>
                </View>
                <View style={styles.badge}>
                    <Text adjustsFontSizeToFit style={styles.badgeText}>
                        Literature
                    </Text>
                </View>
                <View style={styles.badge}>
                    <Text adjustsFontSizeToFit style={styles.badgeText}>
                        Kids
                    </Text>
                </View>
                <View style={styles.badge}>
                    <Text adjustsFontSizeToFit style={styles.badgeText}>
                        Comedy
                    </Text>
                </View>
                <View style={styles.badge}>
                    <Text adjustsFontSizeToFit style={styles.badgeText}>
                        DYI
                    </Text>
                </View>
                <View style={styles.badge}>
                    <Text adjustsFontSizeToFit style={styles.badgeText}>
                        Science Fiction
                    </Text>
                </View>
            </ScrollView>
            <ScrollView style={styles.bookScroll} showsVerticalScrollIndicator={false}>
                <TouchableOpacity 
                    style={styles.bookItem}
                    onPress={() => {
                        props.navigation.navigate({name: 'BookDetail'})
                    }}
                >
                    <ImageBackground
                        style={styles.bookCover}
                        imageStyle={{borderRadius: 5}}
                        source={{uri: 'https://as1.ftcdn.net/jpg/02/40/21/60/500_F_240216012_n3bthsN9tm63un37w4QNPYDk7swwH78v.jpg'}}
                    >
                        <View style={styles.reviewContainer}>
                            <Text style={styles.reviewTitle}>Comic Magazine</Text>
                            <Text style={styles.reviewSubtitle}>by Omar Herrera</Text>
                            <View style={styles.reviewStarContainer}>
                                <FontAwesome name='star' color='orange'/>
                                <FontAwesome name='star' color='orange'/>
                                <FontAwesome name='star' color='orange'/>
                                <FontAwesome name='star' color='orange'/>
                                <FontAwesome name='star' color='orange'/>
                                <Text style={styles.reviewScore}>5.0</Text>
                            </View>
                            <View style={styles.viewsContainer}>
                                <View style={styles.viewsTextContaine}>
                                    <Text style={styles.viewCount}>4268</Text>
                                    <Text style={styles.views}>Views</Text>
                                </View>
                                <FontAwesome name='angle-right' color='#B1BCCF' size={20} style={{alignSelf: 'flex-end'}}/>
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bookItem}>
                    <ImageBackground
                        style={styles.bookCover}
                        imageStyle={{borderRadius: 5}}
                        source={{uri: 'https://as1.ftcdn.net/jpg/02/40/21/60/500_F_240216012_n3bthsN9tm63un37w4QNPYDk7swwH78v.jpg'}}
                    >
                        <View style={styles.reviewContainer}>
                            <Text style={styles.reviewTitle}>Comic Magazine</Text>
                            <Text style={styles.reviewSubtitle}>by Omar Herrera</Text>
                            <View style={styles.reviewStarContainer}>
                                <FontAwesome name='star' color='orange'/>
                                <FontAwesome name='star' color='orange'/>
                                <FontAwesome name='star' color='orange'/>
                                <FontAwesome name='star' color='orange'/>
                                <FontAwesome name='star' color='orange'/>
                                <Text style={styles.reviewScore}>5.0</Text>
                            </View>
                            <View style={styles.viewsContainer}>
                                <View style={styles.viewsTextContaine}>
                                    <Text style={styles.viewCount}>4268</Text>
                                    <Text style={styles.views}>Views</Text>
                                </View>
                                <FontAwesome name='angle-right' color='#B1BCCF' size={20} style={{alignSelf: 'flex-end'}}/>
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bookItem}>
                    <ImageBackground
                        style={styles.bookCover}
                        imageStyle={{borderRadius: 5}}
                        source={{uri: 'https://as1.ftcdn.net/jpg/02/40/21/60/500_F_240216012_n3bthsN9tm63un37w4QNPYDk7swwH78v.jpg'}}
                    >
                        <View style={styles.reviewContainer}>
                            <Text style={styles.reviewTitle}>Comic Magazine</Text>
                            <Text style={styles.reviewSubtitle}>by Omar Herrera</Text>
                            <View style={styles.reviewStarContainer}>
                                <FontAwesome name='star' color='orange'/>
                                <FontAwesome name='star' color='orange'/>
                                <FontAwesome name='star' color='orange'/>
                                <FontAwesome name='star' color='orange'/>
                                <FontAwesome name='star' color='orange'/>
                                <Text style={styles.reviewScore}>5.0</Text>
                            </View>
                            <View style={styles.viewsContainer}>
                                <View style={styles.viewsTextContaine}>
                                    <Text style={styles.viewCount}>4268</Text>
                                    <Text style={styles.views}>Views</Text>
                                </View>
                                <FontAwesome name='angle-right' color='#B1BCCF' size={20} style={{alignSelf: 'flex-end'}}/>
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bookItem}>
                    <ImageBackground
                        style={styles.bookCover}
                        imageStyle={{borderRadius: 5}}
                        source={{uri: 'https://as1.ftcdn.net/jpg/02/40/21/60/500_F_240216012_n3bthsN9tm63un37w4QNPYDk7swwH78v.jpg'}}
                    >
                        <View style={styles.reviewContainer}>
                            <Text style={styles.reviewTitle}>Comic Magazine</Text>
                            <Text style={styles.reviewSubtitle}>by Omar Herrera</Text>
                            <View style={styles.reviewStarContainer}>
                                <FontAwesome name='star' color='orange'/>
                                <FontAwesome name='star' color='orange'/>
                                <FontAwesome name='star' color='orange'/>
                                <FontAwesome name='star' color='orange'/>
                                <FontAwesome name='star' color='orange'/>
                                <Text style={styles.reviewScore}>5.0</Text>
                            </View>
                            <View style={styles.viewsContainer}>
                                <View style={styles.viewsTextContaine}>
                                    <Text style={styles.viewCount}>4268</Text>
                                    <Text style={styles.views}>Views</Text>
                                </View>
                                <FontAwesome name='angle-right' color='#B1BCCF' size={20} style={{alignSelf: 'flex-end'}}/>
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    homeHeader: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'baseline',
        marginLeft: 25,
        marginTop: 10
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    headerSubtitle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'grey',
        marginLeft: 20
    },
    badgeContainer: {
        flex: 0,
        flexDirection: 'row',
        marginLeft: 25,
        marginTop: 10,
    },
    badge: {
        paddingVertical: 5,
        paddingHorizontal: 5, 
        backgroundColor: '#F3F4F3',
        borderRadius: 12,
        marginRight: 15,
    },
    badgeActive: {
        paddingVertical: 5,
        paddingHorizontal: 5, 
        backgroundColor: '#2956BD',
        borderRadius: 12,
        marginRight: 15,
    },
    badgeText: {
        color: '#B1BCCF',
        fontSize: 17
    },
    badgeTextActive: {
        color: 'white',
        fontSize: 17
    },
    bookCover: {
        flex: 0,
        width: 150,
        height: 200,
        marginTop: 25
    },
    bookScroll: {
        marginTop: 35,
        marginRight: 30,
    },
    bookItem: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    reviewContainer: {
        position: 'absolute',
        top: 20,
        right: 125,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 5,
        width: 150
    },
    reviewTitle: {
        fontWeight: 'bold'
    },
    reviewSubtitle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#B1BCCF'
    },
    reviewStarContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 20
    },
    reviewScore: {
        marginLeft: 5,
        color: 'orange'
    },
    viewsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    viewsTextContaine: {
        flexDirection: 'row',
    },
    viewCount: {
        fontWeight: 'bold',
        color: '#1B9CFC',
    },
    views: {
        marginLeft: 5,
        color: '#B1BCCF',
    }
})


export default Home

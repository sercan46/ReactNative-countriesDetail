import React from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet, Image } from 'react-native';

const DetailCountry = ({ route }) => {
    let country = [];
    country = route.params.countries;
    let allCountires = [];
    allCountires = route.params.allCountires;
    let bordersCountry = [];
    const getBorders = () => {
        country.borders.forEach(y => {
            bordersCountry.push(allCountires.filter(x => x.alpha3Code == y).map(z => z.name));
        })
        return bordersCountry;
    }
    const format = (num) => {
        return num.toString().replace(/^[+-]?\d+/, function (int) {
            return int.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        });
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.main}>
                    <View style={styles.header}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: `https://www.countryflags.io/${country.alpha2Code}/shiny/64.png`,
                            }}
                        />
                        <View style={styles.headerRight}>
                            <Text style={styles.headerText}>{country.name}</Text>
                            <Text style={styles.headerText}>{country.alpha2Code} - {country.alpha3Code}</Text>
                        </View>
                    </View>
                    <View style={styles.capital}>
                        <Text style={styles.capitalText}>Capital - {country.capital}</Text>
                    </View>
                    <View style={styles.callingAndDomain}>
                        <View>
                            {country.callingCodes.map((x) => {
                                return (<Text style={styles.allText}>Calling Codes - {x}</Text>)
                            })}
                        </View>
                        <View>
                            {country.topLevelDomain.map((x) => {
                                return (<Text style={styles.allText}>Top Level Domain - {x}</Text>)
                            })}
                        </View>

                    </View>
                    <View style={styles.callingAndDomain}>
                        <View>
                            <Text style={styles.allText}>Region - {country.region}</Text>

                        </View>
                        <View>
                            <Text style={styles.allText}>SubRegion - {country.subregion}</Text>

                        </View>

                    </View>
                    <View style={styles.callingAndDomain}>
                        <View>
                            <Text style={styles.allText}>Population - {country.population!==null?format(country.population):''}</Text>

                        </View>
                        <View>
                            <Text style={styles.allText}>Area - {country.area!==null?format(country.area):''}</Text>

                        </View>

                    </View>
                    <View style={styles.callingAndDomain}>
                        <View>
                            <Text style={styles.allText}>National Income - {country.gini!==null?format(country.gini):''}</Text>

                        </View>
                        <View>
                            {country.timezones.map((x) => {
                                return (<Text style={styles.allText}>Time Zone - {x}</Text>)
                            })}

                        </View>

                    </View>
                    <View style={styles.callingAndDomain}>
                        <View>
                            <Text style={styles.allText}>Native Name - {country.nativeName}</Text>
                        </View>
                        <View>
                            <Text style={styles.allText}>Numeric Code - {country.numericCode}</Text>
                        </View>
                    </View>
                    <View style={styles.callingAndDomain}>
                        <View>
                            {country.currencies.map((x) => {
                                return (
                                    <View >
                                        <View>
                                            <Text style={[styles.allText,{paddingBottom:12  }]}>Currencies</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.allText}>{x.code}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.allText}>{x.name}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.allText}>{x.symbol}</Text>
                                        </View>
                                    </View>
                                )
                            })}
                        </View>


                        <View>
                            <View>
                                <Text style={[styles.allText,{paddingBottom:12  }]}>Languages</Text>
                            </View>
                            {country.languages.map((x) => {
                                return (
                                    <View style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row' }}>

                                        <View>
                                            <Text style={styles.allText}>{x.name}</Text>
                                        </View>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                    <View style={styles.callingAndDomain}>
                        <View>
                            {country.regionalBlocs.map((x) => {
                                return (<Text style={styles.allText}>Regional Blocs - {x.name}</Text>)
                            })}

                        </View>
                    </View>
                    <View style={{display:'flex',alignItems:'center'}}>
                        <View>
                            <Text style={[styles.allText,{paddingBottom:12  }]}>Languages</Text>
                        </View>
                        {
                            getBorders().map((x) => {
                                return (
                                    <Text style={styles.allText}>
                                        {x}
                                    </Text>
                                )

                            })
                        }

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor:'#8b795e',
        paddingBottom:50
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    image: {
        height: 80,
        width: 120
    },
    headerRight: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 30,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    capital: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    capitalText: {
        paddingTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    callingAndDomain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    allText:{
        color:'#ffe1ff',
        fontSize:15,
        fontWeight:'bold'
    }
});
export default DetailCountry;
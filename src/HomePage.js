import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import axios from 'axios';

const width = Dimensions.get('window').width

class HomePage extends Component {

    state = {
        countries: [],
        filterText: '',
        firstCountries:[]
    }


    componentDidMount() {
        axios.get('http://restcountries.eu/rest/v2/all').then((resp) => {
            this.setState({ countries: resp.data,firstCountries:resp.data })
        }).catch(err => {
            console.error('Error: ', err)
        })
    }
    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('detailCountry', { countries: item, allCountires: this.state.countries }) }}>
            <View style={style.main} >
                <Text style={style.name} >{item.name}</Text>
                <View style={style.image}>
                    <Image
                        style={style.tinyLogo}
                        source={{
                            uri: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
                        }}
                    />
                </View>
            </View>
        </TouchableOpacity>

    );
     capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    searchCountries=()=>{
        let newList=[]
        let filterString=this.capitalizeFirstLetter(this.state.filterText);
        this.state.firstCountries.map(x=>{
            if(x.name.indexOf(filterString)>-1){
                return newList.push(x)

            }

        })
       this.setState({countries:newList})
    }
    getList() {
        if (this.state.countries.length > 0) {
            return (

                <FlatList
                    data={this.state.countries}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.area}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-evenly', height: 120, backgroundColor: '#bdbdbd' }}
                />
            )


        }
        else {
            return (<Text>The country you are looking for was not found</Text>)

        }
    }
    render() {
        return (
            <SafeAreaView>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                <TextInput
                style={{color:'crimson'}}
                    onChangeText={(e) => { this.setState({ filterText: e }) }}
                    placeholder="Search Countries"
                />
                <Button  title='Search' onPress={()=>{this.searchCountries()}}>

                </Button>
                </View>
          
                {this.getList()}
            </SafeAreaView>
        )
    }
}
const style = StyleSheet.create({
    main: {
        borderWidth: 4,
        borderRadius: 12,
        borderColor: 'white',
        width: width / 2,
        justifyContent: 'center',
        display: 'flex',
        flex: 1
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        padding: 5,
        fontSize: 15,
        paddingTop: 25,
        textAlign: 'center'
    },
    tinyLogo: {
        width: 80,
        height: 80,
    },
    image: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 18
    }

});

export default HomePage
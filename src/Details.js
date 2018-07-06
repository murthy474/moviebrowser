import React,{Component} from 'react';
import {View,Text, TouchableOpacity,TextInput,Picker} from 'react-native';
import Expo from 'expo';

export default class Details extends Component{
   state={
       name:'',year:'',language:'',moviedetails:[],showbool:'none'
   }

   cleardata(){
       this.setState({name:'',year:'',language:''})
   }
   serchthedata(){
       if(this.state.name ===''){
            alert('please enter the movie name');
       }else if(this.state.year===''){
            alert('please enter the year');   
       }else if(this.state.language===''){
            alert('please select the one ');
       }else{
            console.warn(this.state.name+this.state.year+this.state.language);
        fetch( 'http://www.omdbapi.com/?apikey=cd741519 &t='+this.state.name+'&y='+this.state.year+ '&plot='+this.state.language, {
            method: 'POST',
        }).then((response) => response.json())
            .then((responseJson) => {
                 console.warn(responseJson);
                 this.setState({moviedetails:responseJson},()=>{this.renderdata()});
                   })
            .catch((error) => {
                console.warn(error);
                // alert(Error);s
            });
        }
   }

   renderdata(){
       if(this.state.moviedetails !==''){
        //    console.warn('data');
           let details = this.state.moviedetails
            return(
                <TouchableOpacity style={{borderColor:'skyblue',borderWidth:0.6,borderRadius:8}}
                 onPress={()=>{this.props.navigation.navigate('Information',{'data':details})}}>
                    <Text style={{fontSize:20,marginHorizontal:15}}>{details.Title}</Text>
                        <View style={{flexDirection:'row'}}>                    
                            <Text style={{marginHorizontal:15}}>{details.Year}</Text>
                            <Text>{details.Released}</Text>
                        </View>    
                 </TouchableOpacity>   
            );
       }else{
               alert('No data') 
       }
   }
    render(){

        return(
            <View style={{flex:1,padding:Expo.Constants.statusBarHeight}}>
                <View style={{marginTop:10}}>
                    <TextInput
                            style={{height: 50,width:300, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(name) => this.setState({name})}
                            placeholder='enter the exact movie name'
                            value={this.state.name}
                        />
                        <TextInput
                            style={{height: 50,width:300, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(year) => this.setState({year})}
                            placeholder='enter the year'
                            value={this.state.year}
                            keyboardType='numeric'
                        />
                        <Picker
                            selectedValue={this.state.language}
                            style={{ height: 50, width: 200 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({language:itemValue})}>
                            <Picker.Item label="slect one" value="" />                            
                            <Picker.Item label="Full" value="full" />
                            <Picker.Item label="Short" value="short" />
                            </Picker>   
                </View>
                <View style={{margin:15,flexDirection:'row'}}>
                    <TouchableOpacity style={{backgroundColor:'skyblue'}} onPress={()=>this.serchthedata()}>
                        <Text style={{fontSize:18,margin:8,marginHorizontal:15}}>Serch</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{marginHorizontal:10,backgroundColor:'skyblue'}} onPress={()=>this.cleardata()}>
                        <Text style={{fontSize:18,margin:8,marginHorizontal:15}}>Clear</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {this.renderdata()}
                </View>
             </View>   
        );
    }
}

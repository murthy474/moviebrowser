import React,{Component} from 'react';
import {View,Text, Image} from 'react-native';
import { Button,Avatar} from 'react-native-elements';
import Expo from 'expo';


export default class Information extends Component{
    state={details:''}
    componentDidMount(){
        this.setState({details:this.props.navigation.state.params.data
        },()=>{console.warn(this.state.details)})
    }
    renderimage(Image){
            if(Image.Poster){
                    return(
                        <Avatar
                            xlarge
                            source={{uri:Image.Poster}}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                            />
                    );
                    
            }else{
                return(
                    <Text style={{fontSize:18}}>NO Image</Text>
                );
            }
    }
    renderdata(){
        if(this.state.details != ''){
            console.warn(this.state.details);
            return(
                <View style={{justifyContent:'center',alignSelf:'center'}}>
                    {this.renderimage(this.state.details)}
                    <View style={{margin:10}}>
                        <Text style={{fontSize:20,color:'#0000CD',marginVertical:10}}>Title:   {this.state.details.Title}</Text>                        
                        <Text style={{fontSize:18}}>Released date:   {this.state.details.Released}</Text>
                        <Text style={{fontSize:18,marginVertical:10}}>Actors:  {this.state.details.Actors}</Text>
                        <Text style={{fontSize:18}}>Director:  {this.state.details.Director}</Text>
                        <Text style={{fontSize:18,marginVertical:10}}>Writer:  {this.state.details.Writer}</Text>
                        <Text style={{fontSize:18}}>Genre:  {this.state.details.Genre}</Text>
                        <Text style={{fontSize:18,marginVertical:10}}>Awards:  {this.state.details.Awards}</Text>                            
                        <Text style={{fontSize:18}}>Language:  {this.state.details.Language}</Text>
                        <Text style={{fontSize:18,marginVertical:10}}>imdbRating:  {this.state.details.imdbRating}</Text>                            
                    </View>
                </View>   
            );
        }else{
            return false;
        }
    }
    render(){
        return(
            <View style={{flex:1}}>
               {this.renderdata()}
             </View>   
        );
    }
}

import React from 'react'; // importando uma biblioteca 
import{View, StyleSheet} from 'react-native'; //importaçao da visualização e da folha de estilo
import BotaoProps from './components/BotaoProps'

const App = () => {
  const handlePress = () =>{
    console.log('Botao pressionado');
  };

  return(

    <View style={style.container}>
      <BotaoProps
       label="clicar"
       corFundo="red"
       msg={"opa"}
    />

    <BotaoProps
      label="clicar"
       corFundo="blue"
        msg={"bora"}/>
    </View>


  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'creat',
    alingnItems: 'center',
  },
});

export default App; //deixando disponivel 
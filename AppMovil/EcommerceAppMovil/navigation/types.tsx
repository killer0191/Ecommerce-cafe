import { ImageSourcePropType } from "react-native";

export type RootStackParamList = {
    Hero: undefined; // Hero es la pantalla inicial
    HomeCustomerPage: undefined; // Página de HomeCustomerPage a la que se navega
    RegisterPage: undefined;
    LoginPage:undefined;
    CarritoPage:{idUsuario:number};
    DetailsPage: {item:any, imageSource:ImageSourcePropType};
    FavoritePage:undefined;
  };
  
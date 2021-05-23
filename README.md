# Nubank Clone - ReactNative                                                     
                                  
<p align="center">
<img src="assets/nubank.gif" /> 
</p>


## ⚡️ The Project
  The NubankClone project was developed by me, its a interface clone of the digital bank "Nubank" app. This project has no profit goals, it was developed for practice manners.  
  
## 🎯 Features
 - Dinamic lists based on FAKE API data
 - API Conection via AXIOS
 - Stack navigations
  
## 🖥️ Used Tecnologies
 - [ReactNative](https://reactnative.dev/)
 - [Expo](https://expo.io/)
 - [Styled-Components](https://styled-components.com/)
 - [Axios](https://axios-http.com/docs/intro)

## ⚙️ Dependencies
 - [Yarn](https://yarnpkg.com/)
 - [Expo](https://expo.io/)
 - [JsonServer](https://github.com/typicode/json-server)
 
## 🚀️ Getting Started

1. Clone this repository: 
```bash
git clone https://github.com/avnerjose/react-native-nubank-clone.git
```
2. Go to the folder you cloned the repository and install all dependencies
```bash
  yarn
```
3.  Install the app
```base
expo start
```
4. Start the fake API service
```bash
json-server ./src/services server.json --host <yourIP> --port 3333 --delay 700
```
5. Go to the file "api.ts" and change the API address to your IP

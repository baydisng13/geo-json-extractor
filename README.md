# GeoJSON Extractor

GeoJSON Extractor is a simple command-line tool that allows you to extract GeoJSON features from a MultiGeoJSON file and create individual GeoJSON files for each feature based on a variable name. It is built with Node.js and utilizes the fs and readline modules.
## Installation
1. Install Node.js from https://nodejs.org.
2. Clone this repository to your local machine using git clone
```
git clone https://github.com/baydisng13/geo-json-extractor.git
```
3. Navigate to the project folder in your terminal or command prompt.

## Usage

1. Ensure that you have a MultiGeoJSON file in the project folder that you would like to extract features from. we have sample geo json file by the name `sample.geojson` in the root directory you can test with that.
2. Open a terminal or command prompt and navigate to the project folder.
3. Run npm run extract to start the command-line tool.
4. Enter the path to the MultiGeoJSON file that you want to extract features from.
5. Enter the variable name for the folder that the individual GeoJSON files will be stored in. This should be a property name in the MultiGeoJSON file that is common to all features that you want to extract.
6. Enter the variable name for the file name that each individual GeoJSON file will be saved as. This should be a property name in the MultiGeoJSON file that is unique to each feature that you want to extract.
7. Wait for the tool to finish running. Individual GeoJSON files will be saved in the data folder within the project folder.

## License

This project is licensed under the MIT license. See the LICENSE file for more information.
Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue. If you would like to contribute code, please fork the repository and submit a pull request.


## Contact The Author (Theodore Negusu)
[Github](https://github.com/baydisng13/)  ●  [Linkedin](https://www.linkedin.com/in/theodore-negusu/)  ●  [Twitter](https://twitter.com/TheodoreNegusu)  ●  [Telegram](https://t.me/baydis)

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter path to Your GeoJSON file: ', (multiGeojsonPath) => {
  rl.question('Enter variable name for folder name: ', (shapeGroup) => {
    rl.question('Enter variable name for single file name: ', (shapeName) => {
      try {
        const multiGeojson = JSON.parse(fs.readFileSync(multiGeojsonPath, 'utf8'));

        for (let index = 0; index < multiGeojson.features.length; index++) {
          const feature = multiGeojson.features[index];
          if (feature.properties[shapeGroup] !== undefined) {
            const folderPath = `${feature.properties[shapeGroup]}`
              .replace(/\s/g, '_')
              .replace(/'/g, '')
              .replace(/[/\\?%*:|"<>]/g, '');
            if (shapeName) {
              if (feature.properties[shapeName] !== undefined) {
                const fileName = `${shapeName}_${index}.geojson`;
                const filePath = `./data/${folderPath}/${fileName}`;

                if (!fs.existsSync(`./data/${folderPath}`)) {
                  fs.mkdirSync(`./data/${folderPath}`, { recursive: true });
                }

                fs.writeFileSync(filePath, JSON.stringify(feature));
                console.log(`Created file ${index + 1} of ${multiGeojson.features.length}: ${filePath}`);
              } else {
                console.error("==================================================================")
                console.error("==  CANT FIND THE FIELD ` " + shapeName + " ` IN ` feature.properties `")
                console.error("==================================================================")
                break;
              }
            } else {
              console.log(JSON.stringify(feature));
            }
          } else {
            console.error("==================================================================")
            console.error("==  CANT FIND THE FIELD ` " + shapeGroup + " ` IN ` feature.properties `")
            console.error("==================================================================")
            break;
          }
        }

        rl.close();
      } catch (error) {
        console.error("File Name dose not Exist")
        rl.close();
      }
    });
  });
});
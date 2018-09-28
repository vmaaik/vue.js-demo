# Notes

**package.json** - manages the dependencies 

**webpack.config.js** - is responsible for building 

**main.js** - first file which get executed 
  - render: h => h(App) - this function takes the vue.js template to be rendered and will automatically render the certain template in the 
  place of #app selector. App in this case is App.vue

**App.vue** - main Component/ Instance
  - structure: always template at the top, script at the bottom holding logic for this template and possible styling

The *.vue file is so-called single file template, this will compile to js code in build process and replace everything which is in div #app in index.html file.
export default {} - contains the business logic, it is used as a vue instance so we can add methods, data etc 

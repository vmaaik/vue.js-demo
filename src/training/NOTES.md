# Notes

#### Project structure

**package.json** - manages the dependencies 

**webpack.config.js** - is responsible for building 

**main.js** - first file which get executed 
  - render: h => h(App) - this function takes the vue.js template to be rendered and will automatically render the certain template in the 
  place of #app selector. App in this case is App.vue

**App.vue** - main Component/ Instance
  - structure: always template at the top, script at the bottom holding logic for this template and possible styling. This will compile to js template + vue.js code.

The *.vue file is so-called single file template, this will compile to js code in build process and replace everything which is in div #app in index.html file.
export default {} - contains the business logic, it is used as a vue instance so we can add methods, data etc 

#### Creating components

- template in component must have only one root element, all elements must be wrapped into single div
- data inside the component must be a function
- to register component globally it's necessary to add it to main.js -> Vue.component(<component-name>, <name>.vue) and import it ro main.js file
- component name can have various versions, the classic one is 'my-component': Component
- use props[] to bind/pass values from parent component to child component

#### Styles 

- all styles from each and every component are added to the header
- to apply styles locally style has to have scoped in tag

#### Filters and Mixins 

- filters only transform the value in the template not the data itself 
- filters always take value as a parameter 
- filters can be registered globally 
- better alternatives for filters are computed properties 




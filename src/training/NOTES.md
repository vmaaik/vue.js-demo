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

- vue is merging the data objects in mixins and components
- life cycle hooks in mixins (https://alligator.io/vuejs/component-lifecycle/) are initialized first before component hooks. Component always can overwrite changes provided by mixins.
- global mixins can be added but should be used cautiously as they affect every single component. 
In other words, Vue.js creates a copy of mixin once imported to component


#### Animations

- in order to do any animations vue provide us with <transition>,
- transition can only be used on a single element
- .*-enter - this class is attached only for one frame in the beginning, initial state,
- .*-enter-active - class to set up transition, 
- .*-leave - default position for leaving, 
- if animation and transition are mixed in css then type should be set up to make sure which one dictates the length,
- v-show or v-if can be used to animate the content,
- appear allows animate the element when the page is loaded first, 
- animate.css library uses the same name attribute in transition as vue. To solve the problem there is an option to add additional
parameters for all clasess like enter-class and so on. 

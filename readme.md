# Final Four Morse Code Prototype
Prototype of bracket picker for march madness based on team colors.

## Setup
1. Download repo in public folder, theme directory, etc
2. Open `package.json` and edit the following:
    - `name`
    - `description`
    - `url`
3. Open `index.html` and change `site_name` to the `name` value from `package.json`
    - line 6
    - line 16
4. Run `npm install` from inside this folder to install dependencies
5. If this is your first time setting up **any** sass project, run `gem install sass`
6. From here you can convert `index.html` to any theme format, php, etc, as needed

## Use and structure

### CSS
- CSS is compiled via a grunt watch command out of everything in the `assets/src/scss` folder. Assets are managed via `assets/src/scss/main.scss`
- CSS is compiled into `assets/dist/css`. Nothing in `dist` should ever be edited manually as it will be overwritten by compiled code.

#### Bootstrap
- Bootstrap v3.3.7 is added to the minified CSS automatically.
- Edit `assets/src/scss/_variables` to setup primary colors, fonts, etc.

#### SCSS and Themeing
Everything in this section is in reference to files in `assets/src/scss`.
- Unless customizing core bootstrap functionality, you should only need to edit `_variables.scss` and files in the `theme` folder
- To add new files to `theme`
  - Create new file in `theme` like so: `_example.scss`
  - In `main.scss` add `@import 'theme/example';` to the end of the file
- Theme files should be organized by content types within the specific project

### javascript / jQuery
- Bootstrap v3.3.7 and jQuery v3.2.1 are added to the dist folder and referenced in the HTML already
- `assets/src/js/custom.js` will be minified and added to `dist` automatically by the grunt watch command. Nothing in `dist` should ever be edited manually as it will be overwritten by compiled code.

### Vendor Assets
- Vendor assets, 3rd party tools, etc, should be added to `assets/vendor` and be referenced accordingly.

## Images
- Images should be placed in `assets/images`
- No current image optimization takes place via grunt, so make sure to optimize files before you use them!

### Grunt
- Grunt will listen for code changes in `assets/src` and automatically compile, minify, and uglify all referenced Sass and jQuery assets.
- To start, run `grunt watch` via terminal
- To end, press `control+c` to terminal the listener

## To Do:
1. Update jQuery?
2. Update Bootstrap?
3. Cut the mustard: <http://responsivenews.co.uk/post/18948466399/cutting-the-mustard>
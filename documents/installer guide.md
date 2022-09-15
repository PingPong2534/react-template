# How to installs

## create new app

### Redux + Plain JS template
    npx create-react-app my-app --template redux


## SASS
### install sass
    npm install node-sass --save-dev
`NOTE:`<br/>
`'--save-dev' this Command for install dev tools only`<br/>
`'npm install jquery' for install jquery into project (not dev tools)`<br/>
`'--save' or '--save-dev' both using for write package into 'package.json' file`<br/>
`'npm install' using for reinstall node js package 'node_modules' incase mission or has deleted`<br/>

### setup for run script
```
"scripts": {
    "compile:sass": "node-sass sass/main.scss css/style.css -w"
  }
```
`NOTE:`<br/>
`-w [option flag] using for auto compile if have any changed.`

### run compile sass 
    npm run compile:sass



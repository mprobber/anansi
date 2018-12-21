# Anansi browserlist-config
Sensible [modern browser](https://browserl.ist/?q=last+2+versions%2C+not+%3C+0.05%25%2C+not+dead%2C+not+op_mini+all) support for prod, [`latest firefox & chrome`](http://browserl.ist/?q=last+1+Chrome+versions%2C+last+1+Firefox+versions)
for dev.

## Installation
```
yarn add --dev @anansi/browserslist-config
```

## Usage
Add this your `package.json` file:
```
"browserslist": [
  "extends @anansi/browserslist-config"
]
```
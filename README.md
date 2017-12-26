# React Survey Editor

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/exced/react-survey-editor/blob/master/LICENSE)
[![Build](https://travis-ci.org/exced/react-survey-editor.svg?branch=master)](https://travis-ci.org/exced/react-survey-editor)
[![Npm](https://img.shields.io/npm/v/react-survey-editor.svg?style=flat)](https://www.npmjs.com/package/react-survey-editor)
[![Npm](https://img.shields.io/coveralls/exced/react-survey-editor/master.svg?style=flat)](https://coveralls.io/github/exced/react-survey-editor)

## [Live Demo](https://exced.github.io/react-survey-editor)

## Install

```bash
yarn add react-survey-editor
```

## Build
```bash
yarn lib
```

## Usage
With Redux

```javascript
import React from 'react'
import SurveyEditor from 'react-survey-editor'

const App = ({ onExport }) => (
 <SurveyEditor onExport={onExport} />
)
```

## API

|    Name     |       Type       |       Default       | Required | Description |
| :----------:| :-------------:  | :-----------------: | :----------:| :------------:|
| onExport    | (string) => void | () => { }           | false |Function called when user click on Save button
| initialValue| object           | See | false | Initial survey value  |
| locale | string  | "enUS" | false | Ant design locale language |

## TODO

- Put survey logic on top of the app -> bring your own data model

All contributions are welcome.

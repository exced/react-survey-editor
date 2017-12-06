# React Survey Editor
[![Build Status](https://travis-ci.org/exced/react-survey-editor.svg?branch=master)](https://travis-ci.org/exced/react-survey-editor)

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


All contributions are welcome.
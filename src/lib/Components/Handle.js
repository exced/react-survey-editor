import React, { Component } from 'react'
import { SortableHandle } from 'react-sortable-hoc'

import style from './Styles/Editor'

const Handle = SortableHandle(() => <div className={style.handle} />)

export default Handle
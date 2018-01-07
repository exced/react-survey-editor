import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Input,
  Upload,
  Icon,
  InputNumber,
  message,
} from 'antd'
import styled from 'styled-components'

const StyledInput = styled(Input) `
color: ${props => props.color ? props.color : '#181919'};
font-size: 1.25em;
padding: 0.25em 1em;
border-width: 1px;
border-color: ${props => props.focused ? '#181919' : 'transparent'};
background-color: transparent;
width: auto;
height: auto;
text-align: center;
`

export const EditText = ({ onChange, value, size, placeholder }) => (
  <StyledInput
    onFocus={e => e.target.select()}
    onBlur={e => e.target.blur()}
    onPressEnter={e => e.target.blur()}
    size={size}
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder}
  />
)

EditText.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export class UploadImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      imageUrl: props.value,
    }
  }

  getBase64 = (img, callback) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }

  beforeUpload = (file) => {
    const isImageOk = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isImageOk) {
      message.error('Fichier image requis')
    }
    const isSizeOk = file.size / 1024 / 1024 < 2
    if (!isSizeOk) {
      message.error("La taille de l'image doit être inférieure à 2M")
    }
    return isImageOk && isSizeOk
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true })
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => {
        this.props.onChange(imageUrl)
        this.setState({
          imageUrl,
          loading: false,
        })
      })
    }
  }

  render() {

    const { imageUrl } = this.state

    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Image</div>
      </div>
    )

    return (
      <Upload
        defaultFileList={[imageUrl]}
        name="avatar"
        listType="picture-card"
        showUploadList={false}
        action="//jsonplaceholder.typicode.com/posts/"
        beforeUpload={this.beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="" /> : uploadButton}
      </Upload>
    )
  }
}

UploadImage.propTypes = {
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.boolean,
}

UploadImage.defaultProps = {
  disabled: false,
}

export class NumericInput extends Component {

  onChange = (value) => {
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/
    if (value && ((!isNaN(value) && reg.test(value)) || value === '' || value === '-')) {
      this.props.onChange(Number(value))
    }
  }

  render() {
    return (
      <InputNumber
        {...this.props}
        onChange={this.onChange}
        placeholder={this.props.placeholder}
        maxLength={this.props.maxLength}
      />
    );
  }
}


NumericInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
}

NumericInput.defaultProps = {
  placeholder: "Nombre",
  maxLength: "25",
  min: 0,
  max: 100,
}
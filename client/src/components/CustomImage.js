import Taro, { Component } from '@tarojs/taro';
import { Image } from '@tarojs/components';
import styles from './CustomImage.module.scss';

class CustomImage extends Component {
  onImageClick = (url) => {
    console.log(url);
  };

  render() {
    const {src = '', link = '', mode = 'scaleToFill', cls} = this.props;
    return (<Image src={src} mode={mode} onClick={this.onImageClick.bind(this, link)} className={[styles.customImage, cls]} />);
  }
}

export default CustomImage;

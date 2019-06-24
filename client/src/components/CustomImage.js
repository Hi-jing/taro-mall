import Taro, { Component } from '@tarojs/taro';
import { Image } from '@tarojs/components';
import styles from './CustomImage.module.scss';

class CustomImage extends Component {
  render() {
    const { src = '' } = this.props;
    return (<Image src={src} mode='widthFix' className={styles.customImage} />);
  }
}

export default CustomImage;

import Taro, { Component } from '@tarojs/taro';
import { Text } from '@tarojs/components';
import styles from './CustomText.module.scss';

class CustomText extends Component {
  render() {
    const {text = '', cls = {}} = this.props;
    return (<Text className={[styles.customText, cls]} >{text}</Text >);
  }
}

export default CustomText;

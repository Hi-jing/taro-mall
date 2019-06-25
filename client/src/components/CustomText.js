import Taro, { Component } from '@tarojs/taro';
import { Text } from '@tarojs/components';
import styles from './CustomText.module.scss';

class CustomText extends Component {
  render() {
    const {text = ''} = this.props;
    return (<Text className={styles.customText} >{text}</Text >);
  }
}

export default CustomText;

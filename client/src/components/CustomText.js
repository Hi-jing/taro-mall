import Taro, { Component } from '@tarojs/taro';
import { Text } from '@tarojs/components';
import styles from './CustomText.module.scss';

class CustomText extends Component {
  onTextClick = (link) => {
    console.log(link);
  };

  render() {
    const {text = '', cls = {}, link} = this.props;
    return (<Text onClick={this.onTextClick.bind(this, link)} className={[styles.customText, cls]} >{text}</Text >);
  }
}

export default CustomText;

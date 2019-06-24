import Taro, { Component } from '@tarojs/taro';
import { Text } from '@tarojs/components';
import styles from './Title.module.scss';

class Title extends Component {
  render() {
    const {text = ''} = this.props;
    return (<Text className={styles.title} >{text}</Text >);
  }
}

export default Title;

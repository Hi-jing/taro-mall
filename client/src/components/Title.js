import Taro, { Component } from '@tarojs/taro';
import styles from './Title.module.scss';
import CustomText from "@/components/CustomText";

class Title extends Component {
  render() {
    const {text = '', cls} = this.props;
    return (<CustomText text={text} cls={[styles.title, cls]} />);
  }
}

export default Title;

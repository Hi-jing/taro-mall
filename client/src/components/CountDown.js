import { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import styles from './CountDown.module.scss';
import CustomText from '@/components/CustomText';
import dayjs from 'dayjs';

/**
 * 倒计时
 */
class CountDown extends Component {
  componentDidMount() {
    const { startDate } = this.props;
    const diffNum = dayjs(startDate).diff(dayjs());
    this.setState({
      diffNum,
    });
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const { diffNum } = this.state;
    this.setState({ diffNum: diffNum - 1000 });
  }

  calcText(num) {
    if (num > 9) {
      return num;
    }
    return '0' + num;
  }

  render() {
    const { cls = {} } = this.props;
    let { diffNum } = this.state;
    diffNum = Math.abs(diffNum);
    // const dayNum = (diffNum / (24 * 60 * 60 * 1000)) ^ 0;
    const hourNum = ((diffNum / (60 * 60 * 1000) % 24)) ^ 0;
    const minuteNum = (diffNum / (60 * 1000) % 60) ^ 0;
    const secendNum = (diffNum / 1000 % 60) ^ 0;
    return (
      <View className={[styles.countDown, cls]} >
        {/*<CustomText cls={[styles.border]} text={this.calcText(dayNum)} />*/}
        <CustomText cls={[styles.border]} text={this.calcText(hourNum)} />
        <CustomText cls={styles.point} text=":" />
        <CustomText cls={[styles.border]} text={this.calcText(minuteNum)} />
        <CustomText cls={styles.point} text=":" />
        <CustomText cls={[styles.border]} text={this.calcText(secendNum)} />
      </View >
    );
  }
}

export default CountDown;

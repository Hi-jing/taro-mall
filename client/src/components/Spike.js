import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import dayjs from 'dayjs';
import styles from './Spike.module.scss';
import CustomText from '@/components/CustomText';
import CustomImage from '@/components/CustomImage';
import CountDown from '@/components/CountDown';
import more from '@/assets/index/spike/more@2x.png';
import GoodsSpike from '@/components/GoodsSpike';

/**
 * 秒杀
 */
class Spike extends Component {
  render() {
    const { dataArray = [], title = '京东秒杀', startDate = '2019-08-08 10:22:35.001', cls = {} } = this.props;

    const startDateDayJs = dayjs(startDate);
    const hourNum = startDateDayJs.hour();
    return (
      <View className={[styles.spike, cls]} >
        <View className={styles.title} >
          <View className={styles.left} >
            <CustomText cls={styles.text} text={title} />
            <CustomText cls={styles.session} text={`${hourNum}点场`} />
            <CountDown cls={styles.countDown} startDate={startDateDayJs} />
          </View >
          <View className={styles.more} >
            <CustomText cls={styles.text} text="更多秒杀" />
            <CustomImage cls={styles.img} src={more} />
          </View >
        </View >
        <View className={styles.spikeGoodsList} >
          {dataArray.map(goods => (
            <GoodsSpike data={goods} />
          ))}
        </View >
      </View >
    );
  }
}

export default Spike;

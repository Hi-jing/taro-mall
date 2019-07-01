import Taro, { Component } from '@tarojs/taro';
import CustomImage from '@/components/CustomImage';
import { View } from '@tarojs/components';
import styles from './GoodsSpike.module.scss';

class GoodsSpike extends Component {
  render() {
    const { data = {}, cls = '' } = this.props;
    const { src = '', salePrice = 0 } = data;
    const showSalePrice = salePrice / 100;
    return (
      <View className={[styles.goods, cls]} >
        <CustomImage cls={styles.img} src={src} />
        <View className={styles.firstRow} >
          <View className={styles.symble} >¥</View >
          <View className={styles.price} >{showSalePrice}</View >
        </View >
        <View className={styles.secendRow} >
          <View className={styles.symble} >¥</View >
          <View className={styles.price} >{showSalePrice * 2}</View >
        </View >
      </View >
    );
  }
}

export default GoodsSpike;

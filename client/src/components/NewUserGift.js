import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import styles from './NewUserGift.module.scss';
import CustomImage from "@/components/CustomImage";

/**
 * 新人礼包
 */
class NewUserGift extends Component {
  render() {
    const {dataArray = [], cls = {}} = this.props;
    return (
      <View className={[styles.newUserGift, cls]} >
        {dataArray.map((data = {}, index) => (
          <CustomImage key={index} cls={styles.customImage} src={data.src} link={data.link} />
        ))}
      </View >
    );
  }
}

export default NewUserGift;

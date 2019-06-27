import Taro, { Component } from '@tarojs/taro';
import CustomImage from '@/components/CustomImage';
import Title from '@/components/Title';
import { View } from '@tarojs/components';
import styles from './Category.module.scss';
import CustomText from "@/components/CustomText";

class Category extends Component {
  render() {
    const {title = '', src = '', cls = {}} = this.props;
    return (
      <View className={[styles.category, cls]} >
        <CustomImage cls={styles.imgCls} src={src} />
        <CustomText cls={styles.text} text={title} />
      </View >
    );
  }
}

export default Category;

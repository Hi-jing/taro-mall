import Taro, { Component } from '@tarojs/taro';
import CustomImage from '@/components/CustomImage';
import Title from '@/components/Title';
import { View } from '@tarojs/components';
import styles from './Category.module.scss';

class Category extends Component {
  render() {
    const {text = '', imgUrl = ''} = this.props;
    return (
      <View className={styles.category} >
        <CustomImage width={80} height={80} src={imgUrl} />
        <Title text={text} />
      </View >
    );
  }
}

export default Category;

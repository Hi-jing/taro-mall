import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import styles from './CategoryMenu.module.scss';
import Category from "@/components/Category";

/**
 * 分类菜单
 */
class CategoryMenu extends Component {
  render() {
    const {dataArray = [], cls = {}} = this.props;
    const firstRow = dataArray.slice(0, 5) || [];
    const secendRow = dataArray.slice(5, 10) || [];
    return (
      <View className={[styles.categoryMenu, cls]} >
        <View className={styles.row} >
          {firstRow.map((data = {}, index) => (
            <Category key={index} cls={styles.item} src={data.src} title={data.title} />
          ))}
        </View >
        <View className={styles.row} >
          {secendRow.map((data = {}, index) => (
            <Category key={index} cls={styles.item} src={data.src} title={data.title} />
          ))}
        </View >
      </View >
    );
  }
}

export default CategoryMenu;

import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import BannerSwiper from '@/components/BannerSwiper';
import banner1 from '@/assets/banner/1.jpg';
import banner2 from '@/assets/banner/2.jpg';
import { ScrollView } from "@tarojs/components";
import Category from "@/components/Category";
import Title from "@/components/Title";
import styles from './index.module.scss';


@connect(() => ({}))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  render() {
    const swiperImgs = [banner1, banner2];
    return (
      <ScrollView
        scrollY
        scrollWithAnimation
        className={styles.index}
      >
        <BannerSwiper imgs={swiperImgs} />
        <Title text='世界真美好呢' />
        <Category text='主题' imgUrl={swiperImgs[0]} />
      </ScrollView >
    );
  }
}

export default Index;

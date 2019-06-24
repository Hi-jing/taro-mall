import Taro, { Component } from '@tarojs/taro';
import { ScrollView, View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import BannerSwiper from '@/components/BannerSwiper';
import banner1 from '@/assets/banner/1.jpg';
import banner2 from '@/assets/banner/2.jpg';
import banner3 from '@/assets/banner/3.jpg';
import banner4 from '@/assets/banner/4.jpg';
import banner5 from '@/assets/banner/5.jpg';
import banner6 from '@/assets/banner/6.jpg';
import banner7 from '@/assets/banner/7.jpg';
import styles from './index.module.scss';

@connect(() => ({}))
class Index extends Component {

  config = {
    navigationBarTitleText: '测试页面',
  };

  render() {
    const swiperImgs = [banner1, banner2, banner3, banner4, banner5, banner6, banner7];
    return (
      <ScrollView
        scrollY
        scrollWithAnimation
        className={styles.scrollArea}
      >
        <BannerSwiper imgs={swiperImgs} />
      </ScrollView >
    );
  }
}

export default Index;

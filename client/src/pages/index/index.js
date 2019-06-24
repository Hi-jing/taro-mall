import { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import BannerSwiper from '@/components/BannerSwiper';
import styles from './index.module.scss';
import banner1 from '@/assets/banner/1.jpg';
import banner2 from '@/assets/banner/2.jpg';


@connect(() => ({}))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
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
      </ScrollView >
    );
  }
}

export default Index;

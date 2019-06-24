import Taro, { Component } from '@tarojs/taro';
import { Swiper, SwiperItem } from '@tarojs/components';
import CustomImage from '@/components/CustomImage';
import styles from './BannerSwiper.module.scss';

class BannerSwiper extends Component {
  render() {
    const { imgs = [] } = this.props;
    return (
      <Swiper
        className={styles.swiper}
        indicatorColor='#999'
        indicatorActiveColor='#333'
        interval={2000}
        circular
        indicatorDots
        autoplay
      >
        {imgs.map((img, index) => (
          <SwiperItem key={index} >
            <CustomImage src={img} />
          </SwiperItem >
        ))}
      </Swiper >
    );
  }
}

export default BannerSwiper;

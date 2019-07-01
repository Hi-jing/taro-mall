import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import BannerSwiper from '@/components/BannerSwiper';
import banner1 from '@/assets/banner/1.jpg';
import banner2 from '@/assets/banner/2.jpg';
import { ScrollView } from '@tarojs/components';
import styles from './index.module.scss';
import CategoryMenu from '@/components/CategoryMenu';

import all from '@/assets/index/category/all@2x.png';
import buy from '@/assets/index/category/buy@2x.png';
import clothes from '@/assets/index/category/clothes@2x.png';
import coupon from '@/assets/index/category/coupon@2x.png';
import fresh from '@/assets/index/category/fresh@2x.png';
import money from '@/assets/index/category/money@2x.png';
import recharge from '@/assets/index/category/recharge@2x.png';
import shop from '@/assets/index/category/shop@2x.png';
import time from '@/assets/index/category/time@2x.png';
import world from '@/assets/index/category/world@2x.png';
import NewUserGift from '@/components/NewUserGift';

import channel from '@/assets/index/newuser/channel@2x.png';
import exclusive from '@/assets/index/newuser/exclusive@2x.png';
import gift from '@/assets/index/newuser/gift@2x.png';
import Spike from '@/components/Spike';

@connect(() => ({}))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
  };

  render() {
    const swiperImgs = [{ src: banner1 }, { src: banner2 }];
    const categoryDataArray = [
      { src: shop, title: '京东超市' },
      { src: world, title: '海囤全球' },
      { src: clothes, title: '京东服饰' },
      { src: fresh, title: '京东生鲜' },
      { src: time, title: '京东到家' },
      { src: recharge, title: '充值缴费' },
      { src: buy, title: '9.9元拼' },
      { src: coupon, title: '领券' },
      { src: money, title: '赚钱' },
      { src: all, title: '全部' },
    ];
    const newUserGiftArray = [
      { src: gift },
      { src: channel },
      { src: exclusive },
    ];
    return (
      <ScrollView
        scrollY
        scrollWithAnimation
        className={styles.index}
      >
        <BannerSwiper dataArray={swiperImgs} />
        <CategoryMenu cls={styles.categoryMenu} dataArray={categoryDataArray} />
        <NewUserGift dataArray={newUserGiftArray} />
        <Spike dataArray={[{ src: shop, salePrice: 11800 }]} title="秒杀专场" startDate="2019-07-08 21:10:00.000" />
      </ScrollView >
    );
  }
}

export default Index;

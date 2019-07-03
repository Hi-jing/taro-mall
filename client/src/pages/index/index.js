import { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import BannerSwiper from '@/components/BannerSwiper';
import banner1 from '@/assets/banner/1.jpg';
import banner2 from '@/assets/banner/2.jpg';
import { ScrollView, Text, View } from '@tarojs/components';
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
import CustomSwiper from '@/components/CustomSwiper';

import './index.scss';

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
    // return (
    //   <ScrollView
    //     scrollY
    //     scrollWithAnimation
    //     className={styles.index}
    //   >
    //     <BannerSwiper dataArray={swiperImgs} />
    //     <CategoryMenu cls={styles.categoryMenu} dataArray={categoryDataArray} />
    //     <NewUserGift dataArray={newUserGiftArray} />
    //     <Spike dataArray={[{ src: shop, salePrice: 11800 }]} title="秒杀专场" startDate="2019-07-08 21:10:00.000" />
    //   </ScrollView >
    // );
    return(
      <View className="mui-bar mui-bar-tab" >
        <View className="t-line" >
          <View href="index.html" className="aui-tab-item mui-active" >
            <Text className="mui-icon mui-icon-home" ></Text >
            <Text className="mui-tab-label" >首页</Text >
          </View >
          <View href="category.html" className="aui-tab-item" >
            <Text className="mui-icon mui-icon-extra mui-icon-extra-class" ></Text >
            <Text className="mui-tab-label" >分类</Text >
          </View >
          <View className="aui-tab-item" href="car.html" >
            <Text className="mui-icon mui-icon-extra mui-icon-extra-cart" ></Text >
            <Text className="mui-tab-label" >购物车</Text >
          </View >
          <View className="aui-tab-item" href="me.html" >
            <Text className="mui-icon mui-icon-extra mui-icon-extra-people" ></Text >
            <Text className="mui-tab-label" >我的</Text >
          </View >
        </View >
      </View >
    )
  }
}

export default Index;

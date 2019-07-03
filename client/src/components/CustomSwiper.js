import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import CustomImage from '@/components/CustomImage';
import styles from './CustomSwiper.module.scss';

/**
 * 自定义幻灯片
 */
class CustomSwiper extends Component {
  render() {
    return (
      <View >
        <View className={[styles.customSwiper, 'swiper-wrapper']} >
          <CustomImage
            cls={[styles.img, 'swiper-slide']}
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562097492331&di=11d5f3a04ffe6da87cebdda7c269d3b2&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F42a98226cffc1e17e16635424090f603728de9ec.jpg" />
          <CustomImage
            cls={[styles.img, 'swiper-slide']}
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562097492329&di=dbb46a62051dfef65bb52c4573da1df8&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac4bd11373f08202636809f542fbfbedaa641b05.jpg" />
          <CustomImage
            cls={[styles.img, 'swiper-slide']}
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562097589816&di=0c3c4a45a4610f3cd70103a420b5b537&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20170521%2Fac4bf9af5e1340d4853053920e008905_th.jpg" />
        </View >
        <View className="swiper-pagination"/>
      </View >
    );
  }
}

export default CustomSwiper;

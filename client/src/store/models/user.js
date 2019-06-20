import UserApi from 'rxjava-apis-user-client/UserApi';
import Taro from '@tarojs/taro';
import Config from '../../Config';

export default {
  namespace: 'user',
  state: {},
  effects: {
    * fetch({ payload }, { all, call, put }) {
      yield call(UserApi.getCurrentUser);
    },
    * loginByPhoneSms({ payload: { phone, sms } }, { all, call, put }) {
      const data = yield call(UserApi.loginByPhoneSms, { phone, sms });
      console.log('data:' + data);
      Config.token = data;
      Taro.setStorageSync('token', data);
      yield call(Taro.navigateTo, { url: '/pages/index/index' });
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};

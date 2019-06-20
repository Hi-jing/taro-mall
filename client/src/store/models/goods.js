import Taro from '@tarojs/taro';
import GoodsApi from 'rxjava-apis-goods-client/GoodsApi';
import action from '../../utils/action';
import request from '../../utils/request';
import removeEmpty from '../../utils/paramsUtils';
import delay from '../../utils/delay';

export default {
  namespace: 'goods',
  state: {
    params: {
      page: 0,
      pageSize: 10,
      hasMore: true,
    },
    goodsList: [],
  },
  effects: {
    * fetchList({ payload }, { all, call, put, select }) {
      try {
        yield call(Taro.showLoading, { title: '加载中', mask: true });
        //暂时不用，会出现滚动穿透的问题
        if (!payload.page) {
          payload.page = 0;
        }
        let { params, goodsList: oldGoodsList = [] } = yield select(({ goods }) => goods);
        if (!params.hasMore) {
          return;
        }

        let newParams;
        if (params.page === 0) {
          newParams = params;
          oldGoodsList = [];
        } else {
          newParams = { ...params, ...removeEmpty(payload) };
        }

        let goodsList = yield call(GoodsApi.getList, newParams.page, newParams.pageSize, { ...newParams });

        if (goodsList && goodsList.length) {
          newParams.hasMore = true;
          newParams.page = newParams.page + 1;
        } else {
          newParams.hasMore = false;
        }
        const newGoodsList = [...oldGoodsList, ...(goodsList || [])];
        yield put(action('save', { goodsList: newGoodsList, params: newParams }));
      } catch (e) {
        throw new Error(e);
      } finally {
        yield call(Taro.hideLoading);
      }
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};

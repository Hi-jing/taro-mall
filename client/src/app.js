import "@tarojs/async-await";
import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";
import dva from "./store/dva";
import Index from "./pages/index";
import "./app.scss";
import models from "./store/models";
import action from "./utils/action";
import Context from './Context';
import TabBar from './components/TabBar';
import { ScrollView } from '@tarojs/components';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

Context.init();

const app = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    dispatch(action("net/error", e));
  }
});

const store = app.getStore();

Context.setStore(store);

class App extends Component {

  config = {
    pages: [
      "pages/index/index",
      "pages/shopcart/index",
      "pages/category/index",
      "pages/mine/index",
      "pages/token/login",
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store} >
        <Index />
      </Provider >
    );
  }
}

Taro.render(<App />, document.getElementById("app"));

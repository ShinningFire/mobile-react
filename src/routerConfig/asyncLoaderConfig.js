import React from 'react'
// 异步加载模块全局配置
import Loadable from 'react-loadable';
// 全局loading
import Loading from '../components/Loading'
function asyncGetComponent (wantedComponent) {
    return Loadable({
        loader: wantedComponent,
        loading() {
          return <Loading/>
        },
        delay:1000, // 大雨1000ms出现loading字样
        timeout: 10000, // 大于1s加载超时
      });
}
export default asyncGetComponent



// Loadable.Map({
//     loader: {
//       Bar: () => import('./Bar'),
//       i18n: () => fetch('./i18n/bar.json').then(res => res.json())
//     },
//     render() {
//       let Bar = loaded.Bar.default;
//       let i18n = loaded.i18n;
//       return <Bar { ...props } i18n={ i18n } />;
//     }
//   });
// 根据权限加载请求不同参数内容 或者在render阶段做某些逻辑处理
/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-08-11 04:40:16
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-08-11 07:51:38
 * @FilePath: /eslint-react-vite-ts-template/postcss.config.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        // 'postcss-px-to-viewport': {
        //     // options
        //     unitToConvert: 'px', // 要转化的单位
        //     viewportWidth: 750, //100vw=750px，UI设计稿的宽度,vant是375。可参考这个：https://juejin.cn/post/6961737808339795975
        //     unitPrecision: 6, // 转换后的精度，即小数点位数
        //     propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
        //     viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
        //     fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
        //     selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
        //     minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
        //     mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
        //     replace: true, // 是否转换后直接更换属性值
        //     landscape: false, // 是否处理横屏情况
        //     exclude: [/node_modules/]
        //     // exclude: [/node_modules\/vant/i]
        // },
        ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
}

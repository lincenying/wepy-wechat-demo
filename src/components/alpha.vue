<style lang="less" type="less">
.alpha {
    position: fixed;
    right: 10rpx;
    width: 30rpx;
    top: 100rpx;
    .item {
        display: block;
        font-size: 22rpx;
        color: #333;
        font-family:Arial,'Times New Roman','Microsoft YaHei',SimHei;
        padding: 2rpx;
    }
}
</style>
<template>
    <view class="alpha">
        <block wx:for="{{tags}}" wx:key="index" wx:for-index="index" wx:for-item="item">
            <text class="item">{{item}}</text>
        </block>
    </view>
</template>
<script>
import wepy from 'wepy'

let l = 26
const table = ['★']

while (l--) {
    table.push(String.fromCharCode(65 + (26 - l - 1)))
}
table.push('#')

export default class Message extends wepy.component {
    data = {
        tags: table,
    }
    methods = {
    }
    onLoad () {
    }
}
</script>

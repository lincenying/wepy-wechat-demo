<template>
    <view class="item" @tap="click">
        <image class="icon" src="{{item.icon}}"></image>
        <text class="title">{{item.title}}</text>
        <image class="arrow_left" src="../images/arrow_left.png"></image>
    </view>
</template>
<script>
import wepy from 'wepy'

export default class Item extends wepy.component {

    props = {
        item: {},
        index: {},
    }

    methods = {
        click () {
            console.log(`[clicked]GroupIndex:(${this.$parent.$index}) Index:(${this.$index}) Title:(${this.item.title})`)
            if (this.item.action) {
                this.item.action.call(this.$parent)
            } else {
                this.$root.showToast(this.item.title)
            }
        }
    };
}
</script>

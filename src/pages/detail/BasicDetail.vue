<template>
  <page-layout title="Basic details page">
    <a-card :bordered="false">
      <detail-list title="refund details">
        <detail-list-item term="collect order number">1000000000</detail-list-item>
        <detail-list-item term="status">Picked up</detail-list-item>
        <detail-list-item term="sale order number">987654321</detail-list-item>
        <detail-list-item term="sub-order">1234567890</detail-list-item>
      </detail-list>
      <a-divider style="margin-bottom: 32px" />
      <detail-list title="user information">
        <detail-list-item term="user name">Fu Xiaoxiao</detail-list-item>
        <detail-list-item term="contact phone">18100000001</detail-list-item>
        <detail-list-item term="Common Express">Rookie Storage</detail-list-item>
        <detail-list-item
          term="Pickup address"
        >No. 19 Wantang Road, Xihu District, Hangzhou, Zhejiang Province</detail-list-item>
        <detail-list-item term="Remarks">None</detail-list-item>
      </detail-list>
      <a-divider style="margin-bottom: 32px" />
      <div class="title">Returned goods</div>
      <a-table
        row-key="id"
        style="margin-bottom: 24px"
        :columns="goodsColumns"
        :dataSource="goodsData"
        :pagination="false"
      ></a-table>
      <div class="title">退货进度</div>
      <a-table :columns="scheduleColumns" :dataSource="scheduleData" :pagination="false"></a-table>
    </a-card>
  </page-layout>
</template>

<script>
import DetailList from "../../components/tool/DetailList";
import PageLayout from "../../layouts/PageLayout";

const DetailListItem = DetailList.Item;

const goodsColumns = [
  {
    title: "Product Number",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Product name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Barcode",
    dataIndex: "barcode",
    key: "barcode"
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    align: "right"
  },
  {
    title: "Quantity/(piece)",
    dataIndex: "num",
    key: "num",
    align: "right"
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    align: "right"
  }
];

const goodsData = [
  {
    id: "1234561",
    name: "矿泉水 550ml",
    barcode: "12421432143214321",
    price: "2.00",
    num: "1",
    amount: "2.00"
  },
  {
    id: "1234562",
    name: "凉茶 300ml",
    barcode: "12421432143214322",
    price: "3.00",
    num: "2",
    amount: "6.00"
  },
  {
    id: "1234563",
    name: "好吃的薯片",
    barcode: "12421432143214323",
    price: "7.00",
    num: "4",
    amount: "28.00"
  },
  {
    id: "1234564",
    name: "特别好吃的蛋卷",
    barcode: "12421432143214324",
    price: "8.50",
    num: "3",
    amount: "25.50"
  }
];

const scheduleColumns = [
  {
    title: "Time",
    dataIndex: "time",
    key: "time"
  },
  {
    title: "Rate",
    dataIndex: "rate",
    key: "rate"
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status"
  },
  {
    title: "OperatorID",
    dataIndex: "operator",
    key: "operator"
  },
  {
    title: "Time Consuming",
    dataIndex: "cost",
    key: "cost"
  }
];

const scheduleData = [
  {
    key: "1",
    time: "2017-10-01 14:10",
    rate: "联系客户",
    status: "processing",
    operator: "取货员 ID1234",
    cost: "5mins"
  },
  {
    key: "2",
    time: "2017-10-01 14:05",
    rate: "取货员出发",
    status: "success",
    operator: "取货员 ID1234",
    cost: "1h"
  },
  {
    key: "3",
    time: "2017-10-01 13:05",
    rate: "取货员接单",
    status: "success",
    operator: "取货员 ID1234",
    cost: "5mins"
  },
  {
    key: "4",
    time: "2017-10-01 13:00",
    rate: "申请审批通过",
    status: "success",
    operator: "系统",
    cost: "1h"
  },
  {
    key: "5",
    time: "2017-10-01 12:00",
    rate: "发起退货申请",
    status: "success",
    operator: "用户",
    cost: "5mins"
  }
];

export default {
  name: "BasicDetail",
  components: { PageLayout, DetailListItem, DetailList },
  data() {
    return {
      goodsColumns,
      goodsData,
      scheduleColumns,
      scheduleData
    };
  }
};
</script>

<style lang="less" scoped>
.title {
  color: @title-color;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
}
</style>

<template>
  <page-layout
    title="Number: 234231029431"
    logo="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png"
  >
    <detail-list size="small" :col="2" slot="headerContent">
      <detail-list-item term="founder">Qu Lili</detail-list-item>
      <detail-list-item term="Order product">XX service</detail-list-item>
      <detail-list-item term="creation time">2018-08-07</detail-list-item>
      <detail-list-item term="related documents">
        <a>12421</a>
      </detail-list-item>
      <detail-list-item term="effective date">2018-08-07 ~ 2018-12-11</detail-list-item>
      <detail-list-item term="Remarks">Please confirm within two working days</detail-list-item>
    </detail-list>
    <template slot="extra">
      <head-info title="Status" content="Pending approval" />
      <head-info title="Order amount" content="¥ 568.08" />
    </template>
    <template slot="action">
      <a-button-group style="margin-right: 8px;">
        <a-button>Operation</a-button>
        <a-button>Operation</a-button>
        <a-button>
          <a-icon type="ellipsis" />
        </a-button>
      </a-button-group>
      <a-button type="primary">Main operation</a-button>
    </template>
    <a-card :bordered="false" title="流程进度">
      <a-steps :current="1" progress-dot :direction="isMobile ? 'vertical' : 'horizontal'">
        <a-step title="Create project">
          <a-step-item-group :align="isMobile ? 'left' : 'center'" slot="description">
            <a-step-item link="/dashboard/workplace" title="Qu Lili" icon="dingding-o" />
            <a-step-item title="2016-12-12 12:32" />
          </a-step-item-group>
        </a-step>
        <a-step title="Departmental Preliminary Examination">
          <a-step-item-group :align="isMobile ? 'left' : 'center'" slot="description">
            <a-step-item link="/form/step" title="Zhou Maomao" icon="dingding-o" />
            <a-step-item link="/result/success" title="Hurry" icon="bell" />
          </a-step-item-group>
        </a-step>
        <a-step title="Financial review"></a-step>
        <a-step title="carry out"></a-step>
      </a-steps>
    </a-card>
    <a-card style="margin-top: 24px" :bordered="false" title="User Info">
      <detail-list>
        <detail-list-item term="user name">Fu Xiaoxiao</detail-list-item>
        <detail-list-item term="Member Card Number">32943898021309809423</detail-list-item>
        <detail-list-item term="ID card">3321944288191034921</detail-list-item>
        <detail-list-item term="contact information">18112345678</detail-list-item>
        <detail-list-item
          term="contact address"
        >Intersection of Gongzhuan Road, Huanggushan Road, Xihu District, Hangzhou, Zhejiang Province</detail-list-item>
      </detail-list>
      <detail-list title="Information Group">
        <detail-list-item term="XX data">725</detail-list-item>
        <detail-list-item term="The data update time">2018-08-08</detail-list-item>
        <detail-list-item>&nbsp;</detail-list-item>
        <detail-list-item term="XX data">725</detail-list-item>
        <detail-list-item term="The data update time">2018-08-08</detail-list-item>
        <detail-list-item>&nbsp;</detail-list-item>
      </detail-list>
      <a-card type="inner" title="Multi-layer information group">
        <detail-list title="group name" size="small">
          <detail-list-item term="person in charge">Lin Dongdong</detail-list-item>
          <detail-list-item term="role code">1234567</detail-list-item>
          <detail-list-item term="Affiliated Department">XX Company-YY Department</detail-list-item>
          <detail-list-item term="expiry time">2018-08-08</detail-list-item>
          <detail-list-item
            term="description"
          >This description is very long, very long, very long, very long, very long, very long, very long, very long, very long, very long, very long...</detail-list-item>
        </detail-list>
        <a-divider style="margin: 16px 0" />
        <detail-list title="group name" size="small" :col="1">
          <detail-list-item term="Scientific name">Lin Dongdong</detail-list-item>
          <detail-list-item term="role code">1234567</detail-list-item>
          <detail-list-item term="Affiliated Department">XX Company-YY Department</detail-list-item>
          <detail-list-item term="expiry time">2018-08-08</detail-list-item>
          <detail-list-item
            term="description"
          >This description is very long, very long, very long, very long, very long, very long, very long, very long, very long, very long, very long...</detail-list-item>
        </detail-list>
        <a-divider style="margin: 16px 0" />
        <detail-list title="group name" size="small" :col="2">
          <detail-list-item term="Scientific name">Lin Dongdong</detail-list-item>
          <detail-list-item term="role code">1234567</detail-list-item>
          <detail-list-item term="Affiliated Department">XX Company-YY Department</detail-list-item>
          <detail-list-item term="expiry time">2018-08-08</detail-list-item>
          <detail-list-item
            term="description"
          >This description is very long, very long, very long, very long, very long, very long, very long, very long, very long, very long, very long...</detail-list-item>
        </detail-list>
      </a-card>
    </a-card>
    <a-card style="margin-top: 24px" :bordered="false" title="Call history of users in the past six months">
      <a-list></a-list>
    </a-card>
    <a-card
      style="margin-top: 24px"
      :bordered="false"
      :tabList="tabList"
      :activeTabKey="activeTabKey"
      @tabChange="(key) => {this.activeTabKey = key}"
    >
      <a-table
        v-if="activeTabKey === '1'"
        :columns="operationColumns"
        :dataSource="operation1"
        :pagination="false"
      />
      <a-table
        v-if="activeTabKey === '2'"
        :columns="operationColumns"
        :dataSource="operation2"
        :pagination="false"
      />
      <a-table
        v-if="activeTabKey === '3'"
        :columns="operationColumns"
        :dataSource="operation3"
        :pagination="false"
      />
    </a-card>
  </page-layout>
</template>

<script>
import PageLayout from "@/layouts/PageLayout";
import DetailList from "@/components/tool/DetailList";
import AStepItem from "@/components/tool/AStepItem";
import {
  operation1,
  operation2,
  operation3,
  operationColumns
} from "@/mock/common/tableData";
import { mapState } from "vuex";
import HeadInfo from "@/components/tool/HeadInfo";

const DetailListItem = DetailList.Item;
const AStepItemGroup = AStepItem.Group;

const tabList = [
  {
    key: "1",
    tab: "Operation log one"
  },
  {
    key: "2",
    tab: "Operation log two"
  },
  {
    key: "3",
    tab: "Operation log three"
  }
];

export default {
  name: "AdvancedDetail",
  components: {
    HeadInfo,
    AStepItemGroup,
    AStepItem,
    DetailListItem,
    DetailList,
    PageLayout
  },
  data() {
    return {
      tabList,
      operationColumns,
      operation1,
      operation2,
      operation3,
      activeTabKey: "2"
    };
  },
  computed: {
    ...mapState("setting", ["isMobile"])
  },
  methods: {
    onTabChange(key) {
      console.log(key);
    }
  }
};
</script>

<style lang="less" scoped>
</style>

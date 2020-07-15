<template>
  <div>
    <a-card :bordered="false">
      <div style="display: flex; flex-wrap: wrap">
          <head-info title="My to-do" content="8个任务" :bordered="true"/>
          <head-info title="Average task processing time this week" content="32分钟" :bordered="true"/>
          <head-info title="Tasks completed this week" content="24个"/>
      </div>
    </a-card>
    <a-card
      style="margin-top: 24px"
      :bordered="false"
      title="Standard list"
    >
      <div slot="extra">
        <a-radio-group>
          <a-radio-button>All</a-radio-button>
          <a-radio-button>processing</a-radio-button>
          <a-radio-button>Waiting</a-radio-button>
        </a-radio-group>
        <a-input-search style="margin-left: 16px; width: 272px;" />
      </div>
      <a-button type="dashed" style="width: 100%" icon="plus">Add to</a-button>
      <a-list size="large" :pagination="{showSizeChanger: true, showQuickJumper: true, pageSize: 5, total: 50}">
        <a-list-item :key="i" v-for="i in 5">
          <a-list-item-meta
            description="It’s an inner thing, they can’t reach it, they can’t touch it."
          >
            <a-avatar slot="avatar" size="large" shape="square" src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"/>
            <a slot="title">AliPay</a>
          </a-list-item-meta>
          <div slot="actions">
            <a>edit</a>
          </div>
          <div slot="actions">
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item><a>edit</a></a-menu-item>
                <a-menu-item><a>delete</a></a-menu-item>
              </a-menu>
              <a>More<a-icon type="down"/></a>
            </a-dropdown>
          </div>
          <div class="list-content">
            <div class="list-content-item">
              <span>Owner</span>
              <p>Fu Xiaoxiao</p>
            </div>
            <div class="list-content-item">
              <span>Starting time</span>
              <p>2018-07-26 22:44</p>
            </div>
            <div class="list-content-item">
              <a-progress :percent="80" style="width: 180px" />
            </div>
          </div>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>

<script>
import HeadInfo from '../../components/tool/HeadInfo'
export default {
  name: 'StandardList',
  components: {HeadInfo}
}
</script>

<style lang="less" scoped>
  .list-content-item{
    color: @text-color-second;
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    margin-left: 40px;
    span{
      line-height: 20px;
    }
    p{
      margin: 4px 0 0;
      line-height: 22px;
    }
  }
</style>

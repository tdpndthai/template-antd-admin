<template>
  <a-card class="result-success" :bordered="false">
    <result :is-success="true" :description="description" :title="title">
      <template slot="action">
        <a-button class="action" type="primary">Back to list</a-button>
        <a-button class="action">View project</a-button>
        <a-button class="action" @click="print">print</a-button>
      </template>
      <div>
        <div class="project-name">project name</div>
        <detail-list size="small" style="max-width: 800px; margin-bottom: 8px">
          <detail-list-item term="Project ID">20180724089</detail-list-item>
          <detail-list-item term="principal">Qu Lili</detail-list-item>
          <detail-list-item term="Effective time">016-12-12 ~ 2017-12-12</detail-list-item>
        </detail-list>
        <a-steps :current="1" progressDot>
          <a-step title="Create project">
            <a-step-item-group slot="description">
              <a-step-item title="Qu Lili" icon="dingding-o" />
              <a-step-item title="2016-12-12 12:32" />
            </a-step-item-group>
          </a-step>
          <a-step title="Departmental Preliminary Examination">
            <a-step-item-group slot="description">
              <a-step-item title="Zhou Maomao" icon="dingding-o" :iconStyle="{color: '#00A0E9'}" />
              <a-step-item title="Hurry" :titleStyle="{color: '#00A0E9'}" />
            </a-step-item-group>
          </a-step>
          <a-step title="Financial review"></a-step>
          <a-step title="carry out"></a-step>
        </a-steps>
      </div>
    </result>
  </a-card>
</template>

<script>
import Result from "../../components/result/Result";
import DetailList from "../../components/tool/DetailList";
import AStepItem from "../../components/tool/AStepItem";

const AStepItemGroup = AStepItem.Group;
const DetailListItem = DetailList.Item;
export default {
  name: "Success",
  components: { AStepItemGroup, AStepItem, DetailListItem, DetailList, Result },
  data() {
    return {
      title: "Submitted successfully",
      description:
        "The submission result page is used to feedback the processing results of a series of operation tasks，\n" +
        " If it is just a simple operation, use Message global prompt feedback。\n" +
        " This text area can display simple supplementary instructions, if there is a similar display\n" +
        ' “The requirement of "document", the gray area below can present more complex content。'
    };
  },
  methods: {
    print() {
      window.print();
    }
  }
};
</script>

<style scoped lang="less">
.result-success {
  .action:not(:first-child) {
    margin-left: 8px;
  }
  .project-name {
    font-size: 16px;
    color: @title-color;
    font-weight: 500;
    margin-bottom: 20px;
  }
}
</style>

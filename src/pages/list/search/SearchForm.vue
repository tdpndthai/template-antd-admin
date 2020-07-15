<template>
  <a-card :bordered="false" class="search-form">
    <a-form :form="form">
      <form-row label="Affiliation">
        <a-form-item>
          <tag-select>
            <tag-select-option>Category one</tag-select-option>
            <tag-select-option>Category 2</tag-select-option>
            <tag-select-option>Category three</tag-select-option>
            <tag-select-option>Category 4</tag-select-option>
            <tag-select-option>Category 5</tag-select-option>
            <tag-select-option>Category 6</tag-select-option>
            <tag-select-option>Category 7</tag-select-option>
            <tag-select-option>Category eight</tag-select-option>
            <tag-select-option>Category nine</tag-select-option>
            <tag-select-option>Category ten</tag-select-option>
            <tag-select-option>Category 11</tag-select-option>
            <tag-select-option>Category 12</tag-select-option>
            <tag-select-option>Category 13</tag-select-option>
            <tag-select-option>Category 14</tag-select-option>
            <tag-select-option>Category 15</tag-select-option>
            <tag-select-option>Category 16</tag-select-option>
          </tag-select>
        </a-form-item>
      </form-row>
      <form-row label="owner" style="padding-bottom: 11px">
        <a-form-item>
          <a-select
            mode="multiple"
            style="max-width: 286px"
            v-decorator="['owner', {initialValue: ['1', '2']}]"
          >
            <a-select-option value="3">Myself</a-select-option>
            <a-select-option value="1">Wu Jiahao</a-select-option>
            <a-select-option value="2">Zhou Xingxing</a-select-option>
            <a-select-option value="4">Li Ning</a-select-option>
          </a-select>
        </a-form-item>
        <a @click="lookMyself">Just look at your own</a>
      </form-row>
      <form-row label="other options">
        <a-row>
          <a-col :span="8">
            <a-form-item label="active user" :labelCol="{span: 6}" :wrapperCol="{span: 12}">
              <a-select placeholder="Unlimited">
                <a-select-option value="1">Zhou Xingxing</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="Praise of" :labelCol="{span: 6}" :wrapperCol="{span: 12}">
              <a-select placeholder="Unlimited">
                <a-select-option value="1">excellent</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
      </form-row>
    </a-form>
  </a-card>
</template>

<script>
import TagSelect from "../../../components/tool/TagSelect";
import FormRow from "../../../components/form/FormRow";

const TagSelectOption = TagSelect.Option;

export default {
  name: "SearchForm",
  components: { FormRow, TagSelectOption, TagSelect },
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  methods: {
    lookMyself() {
      this.form.setFieldsValue({
        owner: "3"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.search-form {
  margin-bottom: 24px;
}
</style>

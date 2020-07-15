<template>
  <div>
    <a-form style="max-width: 500px; margin: 40px auto 0;">
      <a-alert
        :closable="true"
        message="After confirming the transfer, the funds will be directly charged into the other party's account and cannot be returned。"
        style="margin-bottom: 24px;"
      />
      <a-form-item
        label="payment account"
        :labelCol="{span: 5}"
        :wrapperCol="{span: 19}"
        class="stepFormText"
      >
        ant-design@alipay.com
      </a-form-item>
      <a-form-item
        label="Accounts receivable"
        :labelCol="{span: 5}"
        :wrapperCol="{span: 19}"
        class="stepFormText"
      >
        test@example.com
      </a-form-item>
      <a-form-item
        label="Payee Name"
        :labelCol="{span: 5}"
        :wrapperCol="{span: 19}"
        class="stepFormText"
      >
        Alex
      </a-form-item>
      <a-form-item
        label="transfer amount"
        :labelCol="{span: 5}"
        :wrapperCol="{span: 19}"
        class="stepFormText"
      >
        ￥ 5,000.00
      </a-form-item>
      <a-form-item :wrapperCol="{span: 19, offset: 5}">
        <a-button :loading="loading" type="primary" @click="nextStep">submit</a-button>
        <a-button style="margin-left: 8px" @click="prevStep">Previous</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'Step2',
  data () {
    return {
      loading: false
    }
  },
  methods: {
    nextStep () {
      let _this = this
      _this.loading = true
      setTimeout(function () {
        _this.$emit('nextStep')
      }, 1500)
    },
    prevStep () {
      this.$emit('prevStep')
    }
  }
}
</script>

<style lang="less" scoped>
  .stepFormText {
    margin-bottom: 24px;
    :global {
      .ant-form-item-label,
      .ant-form-item-control {
        line-height: 22px;
      }
    }
  }
</style>

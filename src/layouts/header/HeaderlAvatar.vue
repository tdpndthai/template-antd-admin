<template>
  <a-dropdown>
    <div class="header-avatar" style="cursor: pointer">
      <a-avatar class="avatar" size="small" shape="circle" :src="user.avatar" />
      <span class="name">{{user.name}}</span>
    </div>
    <a-menu :class="['avatar-menu']" slot="overlay">
      <a-menu-item>
        <a-icon type="user" />
        <span>Personal center</span>
      </a-menu-item>
      <a-menu-item>
        <a-icon type="setting" />
        <span>Set up</span>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item>
        <router-link to="/login">
          <a-icon type="poweroff" />
          <span>Sign out</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HeaderAvatar",
  computed: {
    ...mapState("setting", ["weekMode"]),
    ...mapState("account", ["user"])
  }
};
</script>

<style lang="less">
.header-avatar {
  display: inline-flex;
  .avatar,
  .name {
    align-self: center;
  }
  .avatar {
    margin-right: 8px;
  }
  .name {
    font-weight: 500;
  }
}
.avatar-menu {
  width: 150px;
}
</style>

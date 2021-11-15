<template>
  <div>
    <div v-for="article of currentAriticleList" v-bind:key="article.id">
      投稿者名：{{ article.name }} <br />
      投稿内容：{{ article.content }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Bbs extends Vue {
  private currentAriticleList = [];

  created(): void {
    this.currentAriticleList = this["$store"].getters.getArticles;
  }
}
</script>

<style></style>

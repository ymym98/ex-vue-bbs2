<template>
  <div>
    <div>
      投稿者名：<input type="text" v-model="articleName" /><br />
      投稿内容：<textarea
        name=""
        id=""
        cols="30"
        rows="5"
        v-model="articleContent"
      ></textarea
      ><br />
      <button type="button" v-on:click="addArticle">記事投稿</button>
    </div>
    <div v-for="article of currentAriticleList" v-bind:key="article.id">
      <hr />
      <div>
        投稿者名：{{ article.name }} <br />
        投稿内容：{{ article.content }}
      </div>
      <div v-for="comment of article.commentList" v-bind:key="comment.id">
        コメント者名：{{ comment.name }} <br />
        コメント内容：{{ comment.content }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Article } from "@/types/Article";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Bbs extends Vue {
  private currentAriticleList = new Array<Article>();
  private articleName = "";
  private articleContent = "";

  created(): void {
    this.currentAriticleList = this["$store"].getters.getArticles;
  }

  /**
   * 記事を投稿する.
   */
  addArticle(): void {
    let newId = this.currentAriticleList[0].id + 1;
    this["$store"].commit("addArticle", {
      article: new Article(newId, this.articleName, this.articleContent, []),
    });
    this.articleName = "";
    this.articleContent = "";
  }
}
</script>

<style></style>

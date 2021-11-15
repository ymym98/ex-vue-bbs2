import Vue from "vue";
import Vuex from "vuex";
import { Article } from "@/types/Article";
import { Comment } from "@/types/Comment";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    articles: [
      new Article(3, "佐藤", "佐藤さんの記事", []),
      new Article(2, "山田", "山田さんの記事", [
        new Comment(13, "山崎", "山崎さんのコメント", 2),
      ]),
      new Article(1, "伊藤", "伊藤さんの記事", [
        new Comment(12, "鈴木", "鈴木さんのコメント", 1),
        new Comment(11, "吉田", "吉田さんのコメント", 1),
      ]),
    ],
  }, // end state
  mutations: {
    /**
     * 記事を投稿する.
     * @param state - ステートオブジェクト
     * @param payload - 記事情報
     */
    addArticle(state, payload) {
      state.articles.unshift(payload.article);
    },
    /**
     * コメントを追加する.
     * @param state - ステートオブジェクト
     * @param payload - コメント情報
     */
    addComment(state, payload) {
      const commentArticleId = payload.comment.articleId;
      for (const article of state.articles) {
        if (article.id === commentArticleId) {
          article.commentList.unshift(payload.comment);
        }
      }
    },
  },
  actions: {},
  modules: {},
  getters: {
    /**
     * 記事一覧を返す.
     * @param state - ステートオブジェクト
     * @returns - 記事一覧情報
     */
    getArticles(state) {
      return state.articles;
    },
  },
});

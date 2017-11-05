import { Component } from "@angular/core";
import { Article } from "./components/article/article.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  articles: Article[];
  constructor() {
    this.articles = [
      new Article("Angular 5", "http://www.angular.io", 5),
      new Article("React 16", "http://facebook.com", 1),
    ];
  }
  addArticle(
    title: HTMLInputElement,
    link: HTMLInputElement,
    votes: number,
  ): boolean {
    console.log(`Adding article title: ${title} and link: ${link}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = "";
    link.value = "";
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}

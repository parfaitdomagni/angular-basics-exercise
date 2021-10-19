import { Component } from "@angular/core";

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
})
export class ArticleComponent{
  title: string ="Whatever you want";
  content: string ="some content goes here";
  isTechRelated: boolean = false;

}

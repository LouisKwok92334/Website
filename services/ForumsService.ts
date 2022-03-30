import {Knex} from "knex";

export class ForumsService {
    constructor(private knex: Knex) {}

    async addArticle(name: string, text: string) {
        await this.knex
            .insert({article_name: name, description: text})
            .into("article")
    }

    async articleList() {
        return await this.knex.select("*").from("article");
    }
}

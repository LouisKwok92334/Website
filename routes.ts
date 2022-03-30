import express from "express";
import {forumsController} from "./main";

export const forumsRoutes = express.Router();

export function initRoutes() {
	forumsRoutes.get("/getArticle",forumsController.articleList);
    forumsRoutes.post("/createArticle", forumsController.addArticle);
}
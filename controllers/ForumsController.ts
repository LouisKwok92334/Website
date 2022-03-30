import {Request, Response} from "express";
import {logger} from "../logger";
import {ForumsService} from "../services/ForumsService";

export class ForumsController {
    constructor(private forumsService: ForumsService) {}

    addArticle = async (req: Request, res: Response) => {
        try {
            let {article_name, description} = req.body;

            if (req.body) {
                await this.forumsService.addArticle(article_name, description);
                res.json({success: true});
            } else {
                res.json({success: false});
            }
        } catch (e) {
            logger.error(`path:${req.path} method:${req.method}`);
            logger.error(e);
            res.status(500).json({message: "internal server error"});
        }
    };

    articleList = async (req: Request, res: Response) => {
        try {
            let articleList = await this.forumsService.articleList();
            res.json(articleList);
        } catch (e) {
            logger.error(`path:${req.path} method:${req.method}`);
            logger.error(e);
            res.status(500).json({message: "internal server error"});
        }
    };
}

import { Knex } from "knex";
import { hashPassword } from "../hash";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del().where("username","seedUser").orWhere("username","seedUser2");

    // Inserts seed entries
    // Need to check if chiu exists in the database before inserting
    await knex("users").insert([
        { 
            username:"seedUser",
            password:await hashPassword("seedUser"),
            email: "123456@gmail.com",
            currency:5000,
            rank:1,
            taking_quest:null,
            created_at: '2021-06-28 03:14:07',
            achievement: "",
            display_name: "fatfat cat",
            photo: "photo-1624341222180.png",
            self_intro: "I am the fattest cat of the world ",
        },
        { 
            username:"chiu",
            password:await hashPassword("chiu"),
            email: "chiu@gmail.com",
            currency:6000,
            rank:1,
            taking_quest:null,
            created_at: '2021-06-28 03:14:07',
            achievement: "",
            display_name: "ChiuChiu",
            photo: "chiu.png",
            self_intro: "I am chiu jai ",
        },
        { 
            username:"dennis",
            password:await hashPassword("dennis"),
            email: "dennis@gmail.com",
            currency:25000,
            rank:3,
            taking_quest:null,
            created_at: '2021-06-28 03:14:07',
            achievement: "",
            display_name: "dennis",
            photo: "dennis.png",
            self_intro: "I am denden ",
        },
        { 
            username:"louis",
            password:await hashPassword("louis"),
            email: "louis@gmail.com",
            currency:15000,
            rank:1,
            taking_quest:null,
            created_at: '2021-06-28 03:14:07',
            achievement: "",
            display_name: "louiskwok",
            photo: "photo-1624501288046.jpeg",
            self_intro: "I am louiskwok ",
        },
        { 
            username:"tim",
            password:await hashPassword("tim"),
            email: "tim@gmail.com",
            currency:9999999,
            rank:5,
            taking_quest:null,
            created_at: '2021-06-28 03:14:07',
            achievement: "",
            display_name: "TimSir",
            photo: "photo-1623427082732.png",
            self_intro: "I am TimSir ",
        },
    ]).into("users");
};

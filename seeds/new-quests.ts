import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    
    // 1. Select User based on username
    // 2. Insert user if user not exist
    // Inserts seed entries
    await knex("quests").insert([
        { 
            stage:"published",
            quest_name: "Programming problem",
            user_id: 1,
            publish_date: '2021-06-29 03:14:07',
            duration: "1 year",
            expiration_date: '2021-7-1 00:00:00',
            prize: 2500,
            bail: 1500,
            difficulty: 2,
            photo: "coding.png",
            about_quest: "I need to finish a project. Can you help me?",
            completed_by_user: null,
            updated_at: '2021-01-19 03:14:07',
        },
        { 
            stage:"published",
            quest_name: "freight",
            user_id: 1,
            publish_date: '2021-06-30 03:14:07',
            duration: "1 day",
            expiration_date: '2021-7-1 00:00:00',
            prize: 1500,
            bail: 1000,
            difficulty: 1,
            photo: "freight.jpeg",
            about_quest: "I need to ship three cases of Coke from Hong Kong to Japan, who can help?",
            completed_by_user: null,
            updated_at: '2021-01-19 03:14:07',
        },
        { 
            stage:"published",
            quest_name: "I am too handsome",
            user_id: 2,
            publish_date: '2021-06-30 03:14:07',
            duration: "1 day",
            expiration_date: '2021-7-1 00:00:00',
            prize: 5000,
            bail: 2000,
            difficulty: 4,
            photo: "chiu.png",
            about_quest: "What if I think I am too handsome? Is there a solution?",
            completed_by_user: null,
            updated_at: '2021-01-19 03:14:07',
        },
        { 
            stage:"published",
            quest_name: "Too many girlfriends...",
            user_id: 3,
            publish_date: '2021-06-30 03:14:07',
            duration: "1 day",
            expiration_date: '2021-7-1 00:00:00',
            prize: 15000,
            bail: 10000,
            difficulty: 5,
            photo: "JK.jpeg",
            about_quest: "My girlfriends always needs...",
            completed_by_user: null,
            updated_at: '2021-01-19 03:14:07',
        },
        { 
            stage:"louis",
            quest_name: "Programming...",
            user_id: 4, // Don't hard code user id 
            publish_date: '2021-06-30 03:14:07',
            duration: "1 day",
            expiration_date: '2021-7-1 00:00:00',
            prize: 3500,
            bail: 1000,
            difficulty: 2,
            photo: "coding.png",
            about_quest: "Programming is difficulty..",
            completed_by_user: null,
            updated_at: '2021-01-19 03:14:07',
        },
    ]);

    await knex("process").insert([
        { 
            stage:"process",
            quest_id: 5,
            user_id: 1,
            created_at: '2021-01-19 03:14:07',
            updated_at: '2021-01-19 03:14:07',
            
        },
       
    ]);
};

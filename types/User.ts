export interface IUser {
    first_name: string;
    last_name: string;
    email: string;
    tests: Array<{
        created_at: string;
        data_taken: string;
        facility: string;
        link: string;
        result: number;
        user_id: string;
    }>;
    vacinations: Array<{
        created_at: string;
        image_link: string;
        user_id: string;
    }>;
}
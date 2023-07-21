export type FetchResultsResponseType = {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: null;
    };
    results: ResultResponseType[];
};

export type ResultResponseType = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: "";
    gender: "Male" | "Female";
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: [];
    url: string;
    created: string;
};

export type FetchPostsResponseType = PostResponseType[];

export type PostResponseType = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

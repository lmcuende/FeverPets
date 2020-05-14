export interface Pet {
        id:              number;
        name:            string;
        kind:            "cat" | "dog";
        weight:          number;
        height:          number;
        length:          number;
        photo_url:       string;
        description:     string;
        number_of_lives?: number;
        health?:         "unhealthy" | "very healthy" | "healthy";
        
}
export class Pet{
    constructor(
        public id:              number,
        public name:            string,
        public kind:            "cat" | "dog",
        public weight:          number,
        public height:          number,
        public length:          number,
        public photo_utl:       string,
        public description:     string,
        public number_of_lives: number 
    ){}
}
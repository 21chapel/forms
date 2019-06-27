export class Profile {
    constructor(
        public firstName: string,
        public email: string,
        public gender: string,
        public phone: number,
        public location: string,
        public password?: string,
        public surName?: string,
    ) {}
}

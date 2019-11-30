export default abstract class Player {
    protected constructor(
        public id: string,
        public name: string,
        public meta: object
    ) {}

    public abstract toString(): string
}

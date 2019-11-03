import uuid = require('uuid');

export function getId(): string {
    return uuid.v4()
}

class InputInvalidError extends Error {
    constructor (message, code, data) {
        super(message);
        // assign the error class name in your custom error (as a shortcut)
        this.name = this.constructor.name

        this.code = code;
        this.data = data;
    }
}

module.exports = InputInvalidError
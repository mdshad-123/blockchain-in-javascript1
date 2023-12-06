// block.js

const { GENESIS_DATA } = require('./genesis');

const cryptoHash = require('./cryptoHash');

class Block {
    constructor({ timestamp, previousHash, currentHash, data }) {
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.currentHash = currentHash;
        this.data = data;
    }

    static genesis() {
        return new this(GENESIS_DATA);
    }

    static mineBlock({ lastBlock, data }) {
        const timestamp = new Date();
        const previousHash = lastBlock.currentHash;
        return new this({
            timestamp,
            previousHash,
            data,
            currentHash: cryptoHash(timestamp, previousHash, data)
        });
    }
}

module.exports = Block;
const { Transform } = require('stream');

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

const transformStreamCamelCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(
      chunk
        .toString()
        .toLowerCase()
        .split(' ')
        .map((e, index) => index > 0 ? e.charAt(0).toUpperCase() + e.substring(1) : e)
        .join('')
    );
    callback();
  }
});

process.stdin.pipe(transformStreamCamelCase).pipe(process.stdout);
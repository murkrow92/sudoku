class MatrixHelper {
    static clone(m) {
        var str = JSON.stringify(m);
        return JSON.parse(str);
    }
}

module.exports = MatrixHelper;


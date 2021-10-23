"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPagination(request, response, next) {
    const limitRegisters = 10;
    const { pagina = 1 } = request.query;
    const startIndex = (+pagina - 1) * limitRegisters;
    request.body.actualPage = +pagina;
    request.body.rangeBegin = startIndex;
    request.body.noRegisters = limitRegisters;
    console.log(request.body);
    next();
}
function calculatePages(request, response, next) {
    const numberPages = Math.ceil(request.body.recordsets / request.body.noRegisters);
    request.body.pages = numberPages;
    next();
}
exports.default = {
    getPagination,
    calculatePages
};
//# sourceMappingURL=pagination.js.map
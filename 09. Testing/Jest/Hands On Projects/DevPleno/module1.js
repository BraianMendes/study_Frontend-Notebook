const module1 = {
    func1: (a) => a+1,
    func2: (a, cb) => a+cb(a)
}

module.exports = module1  
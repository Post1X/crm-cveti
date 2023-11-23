class TestController {
    static async test(req, res, next) {
        try {
            const newValue = 15;
            res.status(200).json({
                message: 'Record created successfully',
            });
        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
}

export default TestController;


export default(app) => {
    app.get('/admin/test', async (req, res) => {
        res.status(200).json({"this": "hello"});
    });
}

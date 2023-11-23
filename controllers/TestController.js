import sequelize from "../services/sequelize";
const ArticleModel = require('../models/article')(sequelize);

class TestController {
    static test = async(req, res, next) => {
        try {
            await sequelize.sync({ force: true }); // Это удалит и создаст заново таблицу при каждом запуске
            const testData = [
                { name: 'Article 1', importcode: 'code1', showonfront: 1, position: 1, deleted: 0, suminreport: 1 },
                { name: 'Article 2', importcode: 'code2', showonfront: 0, position: 2, deleted: 0, suminreport: 0 },
            ];
            const createdArticles = await ArticleModel.bulkCreate(testData);
            console.log('Тестовые данные созданы:', createdArticles.map(article => article.toJSON()));
        } catch (error) {
            console.error('Ошибка при создании тестовых данных:', error);
        } finally {
            await sequelize.close(); // Закрываем соединение с базой данных
        }
    }
}

export default TestController;

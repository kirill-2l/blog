import { Article } from '@/entities/Article';

const defaultArticle = {
    title: 'Python news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://zsfond.ru/wp-content/uploads/2021/03/piton-1-1024x578.jpg',
    views: 5204,
    createdAt: '26.02.2022',
    userId: '1',
    type: [
        'IT',
    ],
    blocks: [],
};

export const createArticle = (article?: Article) => cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: {
        Authorization: 'Bearer token',
    },
    body: article ?? defaultArticle,
})
    .then(({ body }) => body);

export const deleteArticle = (articleId: string) => cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: {
        Authorization: 'Bearer token',
    },
});
declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;

            deleteArticle(articleId: string): Chainable<void>;
        }
    }
}

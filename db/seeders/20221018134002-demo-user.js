/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userData = [
      {
        login: 'admin', email: 'admin@admin.ru', password: '123123123', role: 'admin',
      },
      {
        login: 'user', email: 'user@user.ru', password: '123123123', role: 'user',
      },
    ];
    const users = userData.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),

    }));

    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};

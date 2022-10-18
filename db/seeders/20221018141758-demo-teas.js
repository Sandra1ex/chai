/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const teaData = [
      { name: 'Пуэр', title: 'Пуэр - постферментированный чай. Отличается специфической технологией производства: собранные листья, обработанные до уровня зелёного чая, подвергаются процедуре микробной ферментации — естественному либо искусственному (ускоренному) старениюю', picture: 'https://besttea.ru/images/watermarked/1/detailed/44/7_0fy3-yl.jpg' },

      { name: 'Тегуаньинь', title: 'Тегуаньинь - полуферментированный чай улун, занимающий промежуточное положение между зелёными чаями и красными.  В Китае этот чай относят к сине-зелёным (или бирюзовым). Тегуаньинь — крупнолистовой чай. Для его производства лист собирают более зрелый, чем для зелёного чая. Слабая ферментация сохраняет витамины и танин, активизирует кофеин и создаёт условия для образования новых эфирных масел и соединений, придающих чаю своеобразный вкус и особо сильный пряно-фруктовый аромат.', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Tieguanyin2.jpg/800px-Tieguanyin2.jpg?20090211010956' },

      { name: 'Да хун пао', title: 'Да хун пао - Большой Красный Халат», утёсный китайский чай, который производят на северо-западе провинции Фуцзянь, в горах Уи. По классу его относят к улунам средней ферментации или полуферментированным улунам.', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Da_Hong_Pao_Oolong_tea_leaf_close.jpg/274px-Da_Hong_Pao_Oolong_tea_leaf_close.jpg' },

      { name: 'Масала', title: 'Масала -  апиток родом с Индийского субконтинента, получаемый путём заваривания чая со смесью индийских специй и трав.', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Masala_Chai.JPG/274px-Masala_Chai.JPG' },

      { name: 'Матча', title: 'Матча - это японский зеленый чай, растертый в порошок. По-японски он называется маття, а в нашей транскрипции матча. Этот чай традиционно используется в японской чайной церемонии. Особенности выращивания и приготовления позволяют этому напитку сохранять огромное количество полезных веществ.', picture: 'https://legend-tea.ru/upload/medialibrary/a93/a930c6a34d80c2e0bb9a3d361a6ed217.jpg' },
    ];

    const teas = teaData.map((tea) => ({
      ...tea,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Teas', teas);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Teas');
  },
};

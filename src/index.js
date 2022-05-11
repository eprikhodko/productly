import './scss/main.scss';
import { Article } from './js/Article';

const data = [
  {
    id: 1,
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategies/1.jpg',
    tags: ['Art', 'Design'],
    content:
      'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020',
  },
  {
    id: 2,
    title: 'Motivation Is The First Step To Success',
    urlToImage: './src/img/strategies/2.jpg',
    tags: ['Culture'],
    content:
      'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020',
  },
  {
    id: 3,
    title: 'Success Steps For Your Personal Or Business Life',
    urlToImage: './src/img/strategies/3.jpg',
    tags: ['Culture', 'Design', 'Art'],
    content:
      'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020',
  },
];

const STRATEGIES_TAGS_CONTAINER = document.querySelector('.strategies__tags');
const TAGS = document.querySelectorAll('.strategies__tags .tag');
const STRATEGIES = document.querySelectorAll('.strategy-wrapper .strategy');

// по загрузке страницы? вызовем функцию addTagsClickHandler()
window.onload = function () {
  // добавим обработку кликов на теги
  addTagsClickHandler();

  // отрендерим articles, если у нас есть какие то данные
  if (data) {
    renderArticlesToDom();
  }
};

const addTagsClickHandler = () => {
  // добавим ивент листенер на родительский контейнер, который содержит внутри себя теги в виде спанов
  STRATEGIES_TAGS_CONTAINER.addEventListener('click', (e) => {
    // тег на который мы кликнули является пропертью target объекта ивент
    const clickedTag = e.target;
    // если у элемента на который мы кликнули, есть класс тег, значит это тег, и мы будем выполнять код в блоке if
    if (clickedTag.classList.contains('tag')) {
      // сначала удалим со всех тегов оранжевый цвет, и добавим им серый цвет и обводку
      removeSelectedTags();
      // добавим оранжевый цвет тегу, по которому мы кликнули
      selectClickedTag(clickedTag);

      if (clickedTag.innerText === 'All') {
        showAllStrategies();
      } else {
        // передаем в фильтр содержимое тега по которому мы кликнули
        filterStrategyBySelectedTag(clickedTag.innerText);
      }
    }
  });
};

const removeSelectedTags = () => {
  TAGS.forEach((tag) => {
    tag.classList.remove('tag_selected');
    tag.classList.add('tag_bordered');
  });
};

const selectClickedTag = (tag) => {
  tag.classList.add('tag_selected');
  tag.classList.remove('tag_bordered');
};

const showAllStrategies = () => {
  STRATEGIES.forEach((strategy) => {
    strategy.classList.remove('strategy_hidden');
  });
};

const filterStrategyBySelectedTag = (selectedTag) => {
  // будем перебирать все стратегии
  STRATEGIES.forEach((strategy) => {
    // сначала скроем эту стратегию
    strategy.classList.add('strategy_hidden');
    // выберем все теги этой стратегии, и будем проверять, равен ли какой то тег внутри стратегии, тегу, на который мы кликнули
    const strategyTags = strategy.querySelectorAll('.tag');
    strategyTags.forEach((tag) => {
      if (tag.innerText === selectedTag) {
        strategy.classList.remove('strategy_hidden');
      }
    });
  });
};

const renderArticlesToDom = () => {
  const strategiesWrapper = getStrategiesWrapper();
};

const getStrategiesWrapper = () => {
  const STRATEGIES_CONTAINER = document.querySelector('.strategy-wrapper');
  STRATEGIES_CONTAINER.innerHTML = '';
  return STRATEGIES_CONTAINER;
};

import './scss/main.scss';

const STRATEGIES_TAGS_CONTAINER = document.querySelector('.strategies__tags');
const TAGS = document.querySelectorAll('.strategies__tags .tag');
const STRATEGIES = document.querySelectorAll('.strategy-wrapper .strategy');

// по загрузке страницы? вызовем функцию addTagsClickHandler()
window.onload = function () {
  addTagsClickHandler();
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

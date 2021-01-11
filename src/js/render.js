import newCard from './apiService';
import refs from './refs';
import markup from './markup';
import paganation from './pagination';

function render() {
  newCard.fetchCard().then(({ hits, page }) => {
    function getCurrentPages() {
      paganation.movePageTo(page);
    }

    paganation.setTotalItems(newCard.totalItems);
    getCurrentPages();
    refs.galleryRef.insertAdjacentHTML('afterbegin', markup(hits));
  });
}

export default render;

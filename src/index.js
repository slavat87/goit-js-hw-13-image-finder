import './styles.css';
import 'material-design-icons/iconfont/material-icons.css';
import newCard from './js/apiService';
import refs from './js/refs';
import onImgClick from './js/getFullSize';
import renderItems from './js/render';
import pagination from './js/pagination';

refs.formRef.addEventListener('submit', galleryOnSubmit);
refs.galleryRef.addEventListener('click', onImgClick);
refs.paginationRef.addEventListener('click', onPaginationsBtnClick);

function galleryOnSubmit(e) {
  e.preventDefault();
  pagination.setTotalItems(newCard.totalItems);

  const form = e.currentTarget;
  newCard.query = form.elements.query.value;

  refs.galleryRef.innerHTML = '';
  pagination.movePageTo(1);
  form.reset();
  newCard.reset();
  renderItems();
  refs.paginationRef.style.display = 'block';
}

function onPaginationsBtnClick() {
  refs.galleryRef.innerHTML = '';

  getCurrentPage();
  renderItems();
}

function getCurrentPage() {
  const currentTarget = pagination.getCurrentPage();
  newCard.newPage = currentTarget;
}

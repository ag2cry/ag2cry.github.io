<template>
  <div class="menu">
    <ul>
      <li v-for="item in items" @mouseover="showDescription(item.desctiption)" @mouseleave="hiddenDescription">
        <a :href="item.path">{{ item.text }}</a>
      </li>
    </ul>
    <p :class="descriptionClass">{{ descriptionText }}</p>
  </div>
</template>

<script setup>
const descriptionClass = ref("description");
const descriptionText = ref("");

const items = [
  {
    "path": "./about",
    "text": "about me",
    "desctiption": "経歴・スキルセットなど"
  },
  {
    "path": "./portfolios",
    "text": "portfolios",
    "desctiption": "作品集"
  }
]

// method
const showDescription = (text) => {
  descriptionClass.value = "description active";
  descriptionText.value = text;
}
const hiddenDescription = () => {
  descriptionClass.value = "description";
  descriptionText.value = "";
}
</script>

<style>
.menu {
  height: 200px;
}

.menu ul {
  list-style: none;
}

.menu li {
  display: inline-block;
  margin-right: 12px;
}

.menu a {
  color: #000;
  text-decoration: none;
  background-image: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 50%);
  background-position: 0 0;
  background-size: auto 200%;
  transition: .3s;
  padding: 3px
}

.menu a:hover {
  background-position: 0 100%;
  color: #fff;
}

.description {
  padding-left: 40px;
  height: 0;
  opacity: 0;
  visibility: hidden;
  transition: .4s;
}

.description.active {
  height: 2rem;
  opacity: 1;
  visibility: visible;
}
</style>
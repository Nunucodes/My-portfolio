<template>
  <div id="skills" class="skills_container">
    <div class="skills_container__content_box">
      <common-section-title> My Skills </common-section-title>

      <div class="skills_container__content_box--grid" ref="cardsGrid">
        <!-- FRONTEND  -->
        <div class="skill_card">
          <div class="skill_card__title">
            <h3 class="skill_card__title--skill_name">
              FRONTEND WEB DEVELOPMENT
            </h3>
            <hr class="skill_card__title--line_element" />
          </div>

          <div class="skill_card__details">
            <p class="skill_card__details--content">
              I use Frontend technologies (<span class="highlight">
                React.js
              </span>
              and <span class="highlight"> Tailwind </span> ) to build modern
              and responsive websites and web apps. I also create custom layouts
              to fit your needs with my vast knowledge of CSS
            </p>
          </div>

          <div class="skill_card__action">
            <router-link to="/projects">
              <button class="skill_card__action--button">View Projects</button>
            </router-link>
          </div>

          <div class="skill_card__tools">
            <h6 class="skill_card__tools--header">- Tools/Technologies</h6>
            <div class="skill_card__tools--list">
              <div class="item">
                <img src="/src/assets/icons/check.svg" alt="" />
                <p class="item__name">HTML</p>
              </div>
              <div class="item">
                <img src="/src/assets/icons/check.svg" alt="" />
                <p class="item__name">CSS</p>
              </div>
              <div class="item">
                <img src="/src/assets/icons/check.svg" alt="" />
                <p class="item__name">JavaScript</p>
              </div>

              <div class="item">
                <img src="/src/assets/icons/check.svg" alt="" />
                <p class="item__name">React.js</p>
              </div>

              <div class="item">
                <img src="/src/assets/icons/check.svg" alt="" />
                <p class="item__name">BootStrap</p>
              </div>
              <div class="item">
                <img src="/src/assets/icons/check.svg" alt="" />
                <p class="item__name">TailwindCSS</p>
              </div>
              <div class="item">
                <img src="/src/assets/icons/check.svg" alt="" />
                <p class="item__name">Git</p>
              </div>
              <div class="item">
                <img src="/src/assets/icons/check.svg" alt="" />
                <p class="item__name">Github</p>
              </div>
              <div class="item">
                <img src="/src/assets/icons/check.svg" alt="" />
                <p class="item__name">Heroku</p>
              </div>
              <div class="item">
                <img src="/src/assets/icons/check.svg" alt="" />
                <p class="item__name">Netlify</p>
              </div>
            </div>
          </div>

          <div class="floating_illustration">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="147.639"
              height="49.068"
              viewBox="0 0 147.639 49.068"
            >
              <g transform="translate(-491.579 -1509.952)">
                <circle class="a circle" cx="15" cy="15" r="15" />
                <path class="b" d="M492,1548.019H629.048" />
                <path
                  class="b"
                  d="M492,1548.019H629.048"
                  transform="translate(0 10)"
                />
                <path
                  class="c"
                  d="M492,1531.523s12.543-19.564,29.431-19.233,16.665,20.228,33.152,20.228,4.639-20.173,22.866-22.037c14-1.432,96.551,55.473,43.909,21.042"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import tilt from "vanilla-tilt";
import AppIcon from "../../common/AppIcon.vue";
import CommonSectionTitle from "../../common/CommonSectionTitle.vue";
import CommonSquareGrid from "../../common/CommonSquareGrid.vue";
import HeroBubble from "../hero/HeroBubble.vue";

export default defineComponent({
  components: { CommonSquareGrid, CommonSectionTitle, AppIcon, HeroBubble },
  mounted() {
    const cardsGrid = <HTMLDivElement>this.$refs.cardsGrid;
    const skillsCard: HTMLDivElement[] = [];
    for (let i = 0; i < cardsGrid.children.length; i++)
      skillsCard.push(<HTMLDivElement>cardsGrid.children.item(i));
    tilt.init(skillsCard, {
      speed: 100,
    });
  },
});
</script>

<style scoped lang="scss">
@import "../../../styles/components/home/skills.scss";

.a {
  fill: rgba(246, 158, 91, 0.398);
  transform: translate(507px, 1526px);
}
.b,
.c {
  fill: none;
}
.b {
  stroke: #f8a363;
  stroke-width: 2px;
  stroke-dasharray: 160px;
  stroke-dashoffset: 60px;
  transition: all ease 100ms;
}
.c {
  stroke: #cecdcd;
}
</style>

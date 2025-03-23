<template>
  <div class="experience_wrapper">
    <div class="mb-8">
      <p class="muted">&lt;h1&gt;</p>
      <div class="flex flex-wrap items-center justify-between ml-6">
        <h1 class="main-header whitespace-nowrap">Experience</h1>
      </div>
      <p class="muted">&lt;/h1&gt;</p>
    </div>
    <div class="mb-4 flex flex-col">
      <n-timeline class="">
        <n-timeline-item type="success">
          <template #header>
            <h1 class="experience-title">Full Stack Developer</h1>
            <p class="experience-company">American Reading Company</p>
            <p class="experience-dates">March 2021 - Present</p>
          </template>
          <div class="experience-content">
            <n-collapse class="mt-4">
              <n-collapse-item title="Details" name="1">
                <div class="mb-4 ml-4">
                  <ul class="list-disc">
                    <li class="mb-2">
                      Developed and maintained highly performant and responsive
                      web applications, with key contributions to both frontend
                      and backend architecture, while maintaining a focus on
                      usability, accessibility (a11y), and scalability.
                    </li>
                    <li class="mb-2">
                      Led front-end development efforts in a complete overhaul
                      of one of our flagship products, including total
                      scaffolding, development, and maintenance, leading to a
                      30% increase in usage and increasing platform
                      adoption/sales rates.
                    </li>
                    <li class="mb-2">
                      Maintained a high level of awareness for digital products
                      including logging and observability, usage analytics and
                      site visit reports, and overall interface usability -
                      helping to drive decisions on feature development and
                      maintenance.
                    </li>
                  </ul>
                </div>
              </n-collapse-item>
              <n-collapse-item title="Primary Projects" name="2">
                <div class="mb-4 ml-4">
                  <ul class="list-disc">
                    <li class="mb-2">
                      <b>MyArc: </b> An online platform for teachers to manage
                      and maintain course curriculum and assignments. Full-stack
                      application based on Laravel (Inertia) and Vue.
                    </li>
                    <li class="mb-2">
                      <b>Fusion Editor: </b> Companion authoring application for
                      MyArc. This tool enabled internal curriculum developers to
                      author course content for over 4,000+ lesson plans.
                      Full-stack application based on HTMx and Golang.
                    </li>
                    <li class="mb-2">
                      <b>Writing Rubrics: </b> Complementary web product that
                      allows teachers to collect, organize, and grading student
                      writing submissions. Full-stack application based on Vue
                      and Laravel.
                    </li>
                  </ul>
                </div>
              </n-collapse-item>
              <n-collapse-item title="Other" name="3">
                <div class="mb-4 ml-4">
                  <ul class="list-disc">
                    <li class="mb-2">
                      Presented at department-wide lunch and learns on various
                      topics including accessibility best practices and feature
                      deep dives.
                    </li>
                    <li class="mb-2">
                      Attended Connect.TECH and the Knowbility AccessU
                      conferences on front-end development and accessiblity best
                      practices. Presented findings to the larger development
                      team to help drive improvements in our development
                      process.
                    </li>
                    <li class="mb-2">
                      Represented the development team at monthly roundtables
                      with the CEO and other members of the executive leadership
                      board to facilitate communication between departments.
                    </li>
                    <li class="mb-2">
                      Lead a "community of practice" group focused on improving
                      the accessibility of our digital products.
                    </li>
                  </ul>
                </div>
              </n-collapse-item>
            </n-collapse>
          </div>
        </n-timeline-item>
        <n-timeline-item type="success">
          <template #header>
            <h1 class="experience-title">Tech Sales Agent</h1>
            <p class="experience-company">Rebillia</p>
            <p class="experience-dates">Feb 2020 - March 2021</p>
          </template>
          <div class="experience-content">
            <n-collapse class="mt-4">
              <n-collapse-item title="Details" name="1">
                <div class="mb-4 ml-4">
                  <ul class="list-disc">
                    <li class="mb-2">
                      Conducted live sales calls and product demos with a 20%
                      closure rate, leading to an average month over month
                      revenue increase of 10%.
                    </li>
                    <li class="mb-2">
                      Satisfied trouble support tickets for a roster of over 160
                      customers, and effectively communicated the problem and
                      solution to individuals of varying technical backgrounds.
                    </li>
                    <li class="mb-2">
                      Established the company's online brand by generating and
                      growing social media accounts on over 6 platforms,
                      strengthening customer relations and brand awareness.
                    </li>
                  </ul>
                </div>
              </n-collapse-item>
            </n-collapse>
          </div>
        </n-timeline-item>
        <n-timeline-item type="success" />
      </n-timeline>
    </div>
  </div>
</template>

<script lang="ts">
import {
  NButton,
  NTimeline,
  NTimelineItem,
  NCollapse,
  NCollapseItem,
} from "naive-ui";
export default {
  components: {
    NButton,
    NTimeline,
    NTimelineItem,
    NCollapse,
    NCollapseItem,
  },
  data() {
    return {};
  },
  methods: {
    downloadResume() {},
  },
};
</script>

<style lang="scss">
.experience_wrapper {
  padding: 20px;
  color: var(--theme-text);
  line-height: 1.6;

  .main-header {
    font-size: 2.5rem;
  }

  .muted {
    opacity: 0.35;
    font-size: 0.9em;
  }

  .experience-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--theme-text);
  }
  .experience-company {
    color: var(--theme-text);
    opacity: 0.8;
  }
  .experience-dates {
    color: var(--theme-text);
    font-size: 0.9em;
    opacity: 0.6;
  }
  .experience-content {
    color: var(--theme-text);
    opacity: 0.8;
    font-size: 1em;
    margin-top: 10px;

    .n-collapse {
      .n-collapse-item {
        background: #18a058;
        border-radius: 0.5em;
        .n-collapse-item__header {
          padding: 0.75em;
          .n-collapse-item__header-main {
            font-size: 1.2em;
            font-weight: 600;
          }
        }
        .n-collapse-item__content-wrapper {
          padding: 1em;
        }
      }
    }
  }
}
.n-timeline {
  .n-timeline-item:not(:nth-child(1)) {
    .n-timeline-item-timeline {
      .n-timeline-item-timeline__circle {
        border: solid 2px #18a05860;
      }
    }
  }
}
</style>

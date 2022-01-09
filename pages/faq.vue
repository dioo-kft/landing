<template>
    <b-container fluid>
        <page-section style="font-size: 80px">
            <b-row class="mt-5 text-center justify-content-center">
                <b-col>
                    Gyakran Ismételt Kérdések
                </b-col>
            </b-row>
        </page-section>
        <page-section>
            <b-row class="my-5">
                <b-col class="accordion" role="tablist">
                    <b-card v-for="id in items.length" :key="id" no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle="'accordion-'+id" class="faq-question">{{ items[id-1].question }}</b-button>
                            <!-- [v-b-toggle.accordion-+id] -->
                        </b-card-header>
                        <b-collapse :id="'accordion-'+id" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body class="faq-answer">
                                <b-card-text>{{ items[id-1].answer }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </b-col>
            </b-row>
        </page-section>
    </b-container>
</template>

<script>
  export default {
    data() {
      return {
        text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
         items: [
            {
                question: 'Van itt valaki?',
                answer: 'Senki.'
            },
            {
                question: 'És most?',
                answer: 'Senki.'
            },
            {
                question: 'Na és most?',
                answer: 'Senki.'
            },
            {
                question: 'Hm?',
                answer: 'Valaki.'
            },
         ],
      }
    }
  }
</script>
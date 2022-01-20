<template>
    <b-row :id="sectionId" class="page-section justify-content-center py-4 px-sm-3">
        <b-col class="page-content py-5">
            <b-row v-if="title">
                <b-col class="text-center page-section-title mb-4">
                    <p>{{ title }}</p>
                </b-col>
            </b-row>
            <b-row align-h="center">
                <slot></slot>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: ['title', 'sectionId'],
}
</script>

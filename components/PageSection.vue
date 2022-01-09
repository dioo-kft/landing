<template>
    <b-row class="page-section justify-content-center py-5 px-3" >
        <b-col class="page-content pb-5">
            <b-row>
                <b-col class="text-center page-section-title mb-4">
                    <p>{{ title }}</p>
                </b-col>
            </b-row>
            <b-row>
                <slot></slot>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: ['title'],
}
</script>

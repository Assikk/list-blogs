<template>
    <div>
        <Title class="text-center mb-4">
            Лист Блогов
        </Title>
        <Pagination class="flex justify-end items-end py-4"
        :list="list"
        :active="limit"
        @pagination="changeLimit"/>
        <Search v-model="search"
        @search="searchCard"
        @clearInput="clearInput"/>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            <Card v-for="card in page" :key="card.id" :card="card" class="cursor-pointer"
            @change="change(card)"/>
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import Pagination from '@/components/ui/pagination.vue'
import Title from '@/components/ui/title.vue'
import Card from '@/components/ui/card.vue'
import Search from '@/components/ui/search.vue'
export default {
    name: 'HomeComponent',
    components: {
        Title, Card, Pagination, Search
    },
    data() {
        return {
            list: [
                {
                    id: 1,
                    value: '10',
                    text: '10'
                },
                {
                    id: 2,
                    value: '20',
                    text: '20'
                },
                {
                    id: 3,
                    value: '50',
                    text: '50'
                },
            ],
            limit: '10',
            search: ''
        }
    },
    computed: {
        ...mapState({
            page: state => state.page
        })
    },
    methods: {
        ...mapMutations({
            change_modal: 'CHANGE_MODAL'
        }),
        ...mapActions({
            get_request: 'get_request'
        }),
        async get_page() {
            let payload = {
                request: `https://jsonplaceholder.typicode.com/photos?${this.search.length > 0 ? `title_like=^${this.search}&` : ''}_limit=${this.limit}`,
                key: 'page',
                body: []
            }
            await this.get_request(payload)
        },
        async change(e) {
            let payload = {
                request: `https://jsonplaceholder.typicode.com/photos/${e.id}`,
                key: 'modal',
                body: {}
            }
            await this.get_request(payload)
            this.change_modal(true)
        },
        async changeLimit(e) {
            this.limit = e
            await this.get_page()
        },
        async searchCard(e) {
            this.search = e
            await this.get_page()
        },
        async clearInput() {
            this.search = ''
            await this.get_page()
        }
    },
    mounted() {
        this.get_page()
    }
}
</script>
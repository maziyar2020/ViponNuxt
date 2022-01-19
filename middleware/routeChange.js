export default function({ store, route, from }) {
    if (from) {
        if (route.path !== from.path) {
            store.dispatch('handleChangeRoute')
            setTimeout(() => {
                store.dispatch('handleDropDownStatus')
            }, 200)
        }
    }
}
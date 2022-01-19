export const state = () => ({
    // expand menu
    menuOpen: false,
    dropDownStatus: false,
    // recruitment page
    userNameInput: '',
    gender: '',
    phone: '',
    email: '',
    exprience: '',
    description: '',
    resume: null,
    personalImage: null,
    formCompleted: false,
    // branch page
    jobField: '',
    city: '',
    jobId: null,
    cooperationCurrentComponent : 'CooperationText',
    // blog
    category : [],
    // error handling in forms
    formErrors : []
})

export const getters = {
    // getter for expand menu
    getMenuOpenDetail: (state) => state.menuOpen,
    getDropDownStatus: state => state.dropDownStatus,
    // forms
    getUser: (state) => state.userNameInput,
    getGender: (state) => state.gender,
    getPhone: (state) => state.phone,
    getEmail: (state) => state.email,
    getExp: (state) => state.exprience,
    getDesc: (state) => state.description,
    getResume: (state) => state.resume,
    getPersonalImage: (state) => state.personalImage,
    getJobField: (state) => state.jobField,
    getCity: (state) => state.city,
    getJobId: (state) => state.jobId,
    getCurrentComponent : state => state.cooperationCurrentComponent,
    getCategories : state => state.category,
    getErrors : state => state.formErrors
}

export const mutations = {
    // close or open expand menu => sidebar
    HANDLE_TOGGLE_SIDEBAR(state) {
        state.menuOpen = !state.menuOpen
    },
    HANDLE_CHANGE_ROUTE(state) {
        state.dropDownStatus = true
    },
    HANDLE_DROPDOWN_STATUS(state) {
        state.dropDownStatus = false
    },
    // forms
    HANDLE_UPDATE_USER_NAME(state, payload) {
        state.userNameInput = payload
    },
    HANDLE_UPDATE_GENDER(state, payload) {
        state.gender = payload
    },
    HANDLE_PHONE_NUMBER(state, payload) {
        state.phone = payload
    },
    HANDLE_EMAIL(state, payload) {
        state.email = payload
    },
    HANDLE_EXP(state, payload) {
        state.exprience = payload
    },
    HANDLE_DESC(state, payload) {
        state.description = payload
    },
    HANDLE_RESUME(state, payload) {
        state.resume = payload
    },
    HANDLE_IMAGE(state, payload) {
        state.personalImage = payload
    },
    HANDLE_JOB_FIELD(state, payload) {
        state.jobField = payload
    },
    HANDLE_CITY(state, payload) {
        state.city = payload
    },
    HANDLE_JOB_ID(state, payload) {
        state.jobId = payload
    },
    HANDLE_GET_FORM_INFO(state, payload) {
        state.formCompleted = payload
    },
    HANDLE_CLEAR_FORM(state) {
        state.userNameInput = ''
        state.gender = ''
        state.phone = ''
        state.email = ''
        state.exprience = ''
        state.description = ''
        state.resume = null
        state.personalImage = null
    },
    // cooperation navigator mutation
    NAVIGATE_TO_COOPERATION_PAGE(state,navigateTo){
        state.cooperationCurrentComponent = navigateTo
    },
    HANDLE_CATEGORY(state,payload){
        state.category = payload
    },
    // form error handle
    HANDLE_FORM_ERRORS(state,errors){
        state.formErrors = errors
    }
}

export const actions = {
    handleUpdateUserName({ commit }, payload) {
        commit('HANDLE_UPDATE_USER_NAME', payload)
    },
    handleUpdateGender({ commit }, payload) {
        commit('HANDLE_UPDATE_GENDER', payload)
    },
    handlePhoneNumber({ commit }, payload) {
        commit('HANDLE_PHONE_NUMBER', payload)
    },
    handleEmail({ commit }, payload) {
        commit('HANDLE_EMAIL', payload)
    },
    handleExprience({ commit }, payload) {
        commit('HANDLE_EXP', payload)
    },
    handleDescription({ commit }, payload) {
        commit('HANDLE_DESC', payload)
    },
    handleResume({ commit }, payload) {
        commit('HANDLE_RESUME', payload)
    },
    handlePersonalImage({ commit }, payload) {
        commit('HANDLE_IMAGE', payload)
    },
    handleJobField({ commit }, payload) {
        commit('HANDLE_JOB_FIELD', payload)
    },
    handleCity({ commit }, payload) {
        commit('HANDLE_CITY', payload)
    },
    handleJobId({ commit }, payload) {
        commit('HANDLE_JOB_ID', payload)
    },
    handleFormInfo({ commit }, payload) {
        commit('HANDLE_GET_FORM_INFO', payload)
    },
    handleClearFormFields({ commit }) {
        commit('HANDLE_CLEAR_FORM')
    },
    handleToggleSidebar({ commit }) {
        commit('HANDLE_TOGGLE_SIDEBAR')
    },
    handleChangeRoute({ commit }) {
        commit('HANDLE_CHANGE_ROUTE')
    },
    handleDropDownStatus({ commit }) {
        commit('HANDLE_DROPDOWN_STATUS')
    },
    // cooperation form navigator
    navigateToCooperationPage({commit},navigateTo){
        commit('NAVIGATE_TO_COOPERATION_PAGE',navigateTo)
    },
    handleCategory({commit},payload){
        commit("HANDLE_CATEGORY",payload)
    },
    // handle form Errors
    handleFormErrors({commit},errors){
        commit('HANDLE_FORM_ERRORS',errors)
    }
}
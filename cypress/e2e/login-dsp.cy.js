const loginPage = require('../support/page-object/login-page/login-page')
const base = require('../support/page-object/base')
const data = require('../support/page-object/data-static')
const dashboardPage = require('../support/page-object/dashboard-page/dashboard-page')

describe("Login Data", () => {
    it("with valid data", () => {
        base.openUrl()
        loginPage.userLogin(data.user_data.registered_username, data.user_data.registered_password)
        dashboardPage.verifyDashboardPageAppears()
    })
})

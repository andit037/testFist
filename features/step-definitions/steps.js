const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const moment = require('moment');

const DashboardPage = require('../pageobjects/dashboard.page');

var currentDate = moment().local().format('DD-MM-YYYY')
var currentDateOpposite = moment().local().format('YYYY-MM-DD')
var digits = Math.floor(Math.random() * 9000000000) + 1

Given(/^user am on the dashboard setorku bulk-upload page$/, async () => {
	await browser.url(`https://dev140.ids.id:93/auth/login`)
    await DashboardPage.Login()
});

When(/^user click Add Manual button$/, async () => {
	await DashboardPage.addManualButton()
});

When(/^user input "(.*)" on namefield$/, async (args1) => {
	await DashboardPage.nameBulkUpload(args1)
});

When(/^user click tambah button$/, async () => {
	await DashboardPage.tambahButton()
});

When(/^user see popup message "(.*)"$/, async (args1) => {
    await expect(DashboardPage.popUpMessage).toHaveTextContaining(args1)
});

When(/^user click ok button$/, async () => {
	await DashboardPage.okButton()
});

Then(/^user see new data "(.*)" has been created$/, async (args1) => {
	//await expect(DashboardPage.nameDataTable).toHaveText(`OTO_MDN_`+args1+`_`+DashboardPage.tambahButton(DashboardPage.time))
	await expect(DashboardPage.nameDataTable).toHaveTextContaining(args1)
});


When(/^user input dateNow on startdate$/, async () => {
	await DashboardPage.startDate(currentDate)
});


When(/^user input dateNow on enddate$/, async() => {
	await DashboardPage.endDate(currentDate)
});

When(/^user select "(.*)" status$/, async(args1) => {
	await DashboardPage.dropDown(args1)
});

When(/^user click search button$/, async() => {
	await DashboardPage.searchButton()
});

Then(/^user see data dateNow with "(.*)" status on list data$/, async(args2) => {
	await expect(DashboardPage.dateColumnValue).toHaveTextContaining(currentDateOpposite)
	await expect(DashboardPage.statusColumnValue).toHaveTextContaining(args2)
});


When(/^user click the detail button on data finance$/, async () => {
	await DashboardPage.clickDetailButton()
});

When(/^user input on merchant transaction id$/, async() => {
	await DashboardPage.Merchant(digits)
});

When(/^user input "([^"]*)" on usercode$/, async(args1) => {
	await DashboardPage.UserCode(args1)
});

When(/^user input "([^"]*)" on username$/, async(args1) => {
	await DashboardPage.Username(args1)
});

When(/^user input "([^"]*)" on customer id$/, async(args1) => {
	await DashboardPage.customer(args1)
});

When(/^user input "([^"]*)" on total amount$/, async(args1) => {
	await DashboardPage.TotalAmount(args1)
});

When(/^user input "([^"]*)" on periode$/, async(args1) => {
	await DashboardPage.Periode(args1)
});


When(/^user click add data button$/, async () => {
	await DashboardPage.clickAddData()
});


Then(/^user see on merchant transaction id data list$/, async () => {
	await expect(DashboardPage.dateColumnValue).toHaveTextContaining(digits)
});

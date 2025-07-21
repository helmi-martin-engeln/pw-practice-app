import { Page, expect } from "@playwright/test";
import {NavigationPage} from '../page-objects/navigationPage'
import {FormLayoutsPage} from '../page-objects/formLayoutsPage'
import { DatepickerPage } from '../page-objects/datepickerPage'

export class PageManager{

    private readonly page: Page
    private readonly navigationPage: NavigationPage
    private readonly formlayoutsPage: FormLayoutsPage
    private readonly datePickerPagr: DatepickerPage

    constructor (page: Page){
        this.page = page
        this.navigationPage = new NavigationPage(this.page)
        this.formlayoutsPage = new FormLayoutsPage(this.page)
        this.datePickerPagr = new DatepickerPage(this.page)
    }

    navigateTo(){
        return this.navigationPage
    }

    onFormLayoutsPage(){
        return this.formlayoutsPage
    }

    onDatepickerPage(){
        return this.datePickerPagr
    }

}
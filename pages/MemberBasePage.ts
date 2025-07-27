import { Page, Locator } from '@playwright/test'

class MemberBasePage {
    readonly page: Page
    readonly memberSidebarHeader: Locator
    readonly memberBenefitsText: Locator
    readonly memberAccountText: Locator
    readonly getMemberDashboard: Locator
    readonly getMemberPlanInformation: Locator
    readonly getMemberNotifications: Locator
    readonly getMemberDownloadForms: Locator
    readonly getMemberSubmitClaims: Locator
    readonly getMemberTrackClaims: Locator
    readonly getMemberDentalActivity: Locator
    readonly getMemberProfile: Locator
    readonly getMemberLogout: Locator
    

    constructor(page: Page) {
        this.page = page
        this.memberSidebarHeader = this.page.locator('#member-sidebar-header')
        this.memberBenefitsText = this.page.locator('p[class^="text-xs"]').first()
        this.memberAccountText = this.page.locator('p[class^="text-xs"]').last()
        this.getMemberDashboard = this.page.locator('#nav-dashboard')
        this.getMemberPlanInformation = this.page.locator('#nav-plan-information')
        this.getMemberNotifications = this.page.locator('#nav-notifications')
        this.getMemberDownloadForms = this.page.locator('#nav-download-forms')
        this.getMemberSubmitClaims = this.page.locator('#nav-submit-claims')
        this.getMemberTrackClaims = this.page.locator('#nav-track-claims')
        this.getMemberDentalActivity = this.page.locator('#nav-dental-activity')
        this.getMemberProfile = this.page.getByTestId('nav-profile')
        this.getMemberLogout = this.page.getByTestId('nav-logout')
    }

    async navigateToMemberBasePage() {
        await this.page.goto('/patient/dashboard')
    }
}
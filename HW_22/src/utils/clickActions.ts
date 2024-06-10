/// <reference types="@wdio/globals/types" />
import { expect } from "@wdio/globals";

export const clickOnElement = async (element: WebdriverIO.Element) => {
    await element.waitForDisplayed();
    await element.waitForEnabled();
    await element.click();
};

export async function elementIsDisplayed(element: WebdriverIO.Element, expected: boolean) {
    const isDisplayed = await element.isDisplayed();
    expect(isDisplayed).toEqual(expected);
};

export async function checkUrl(expectedUrl: string) {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toEqual(expectedUrl);
}
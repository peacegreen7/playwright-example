import { Then, Given } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

let numberOfApples = 0;
let total = 0;

Given("I buy {int} apples", async (num: number) => {
    numberOfApples = num
})

Given("Each apple cost {int} USD", async (price: number) => {
    total = numberOfApples * price
})

Given("I have a coupon {float} cent", async (discount: number) => {
    total = total - discount
})

Then("Total bill should be equal {float} USD", async (amount: number) => {
    expect(total).toEqual(amount)
})
import {test, expect} from '@playwright/test';
import { faker } from '@faker-js/faker';


const randomName = faker.person.fullName(); 
const randomEmail = faker.internet.email(); 
const user1 = randomName;
const userEmail = randomEmail;

    
test("faker", async () => {
    console.log(user1, userEmail)
});
test("faker2", async () => {
    console.log(user1, userEmail)
})


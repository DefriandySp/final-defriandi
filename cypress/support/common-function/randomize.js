import { faker } from '@faker-js/faker'

class Randomize {
    constructor() {
        this.randomName = '';
    }

    name() {
        this.randomName = faker.person.firstName();
        return this.randomName
    }

    email() {
        return this.randomName + '@defriandy56.com';
    }

    password() {
        return this.randomName + '3421';
    }

    product_code() {
        return 'ProdDefQA' + faker.number.int()
    }

    product_name() {
        return 'Defriandy-QA-' + faker.date.recent()
    }

    phone_number() {
        return faker.number.int()
    }

    category_name() {
        return 'DSP-Category' + faker.date.recent()
    }
}

module.exports = new Randomize();

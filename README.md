# Mongoose Anonymoose

## Description

This plugin removes _id and __v fields from the objects when you call the methods toJson and toObject.

## Installation

### yarn

```sh
yarn add mongoose-anonymoose
```

### npm

```sh
npm i mongoose-anonymoose
```

### pnpm

```sh
pnpm i mongoose-anonymoose
```

### bun.js

```sh
bun install mongoose-anonymoose
```

## Usage

Connection scope

```ts
connection = await mongoose.connect(options)
connection.plugin(anonymoose);
```

Query level scope

```ts
export class UsersRepository {
    public async findOne(uuid: string): Promise<User> {
        const user = await UserModel.findOne({ uuid });
        if (user) {
            return User.instance(user.toJson());
        }
    
        return null;
    }
}
```

---

<div align="center">
    <a href="https://github.com/fdorantesm" target="_blank">
        <img src=https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
    </a>
    <a href="https://twitter.com/fdorantesm" target="_blank">
        <img src=https://img.shields.io/badge/twitter-%2300acee.svg?&style=for-the-badge&logo=twitter&logoColor=white alt=twitter style="margin-bottom: 5px;" />
    </a>
    <a href="https://linkedin.com/in/fdorantesm" target="_blank">
        <img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
    </a>
    <a href="https://www.youtube.com/user/FernandoDorantes" target="_blank">
        <img src=https://img.shields.io/badge/youtube-%23EE4831.svg?&style=for-the-badge&logo=youtube&logoColor=white alt=youtube style="margin-bottom: 5px;" />
    </a>
    <a href="https://stackoverflow.com/users/6484286" target="_blank">
        <img src=https://img.shields.io/badge/stackoverflow-%23F28032.svg?&style=for-the-badge&logo=stackoverflow&logoColor=white alt=stackoverflow style="margin-bottom: 5px;" />
    </a>
    <a href="https://codepen.com/fdorantesm" target="_blank">
        <img src=https://img.shields.io/badge/codepen-%23131417.svg?&style=for-the-badge&logo=codepen&logoColor=white alt=codepen style="margin-bottom: 5px;" />
    </a>
</div>

<br/>  

<div align="center">
    <a href="https://paypal.me/fdorantesm" target="_blank" style="display: inline-block;">
        <img src="https://img.shields.io/badge/Donate-PayPal-blue.svg?style=flat-square&logo=paypal" align="center" />
    </a>
</div>  
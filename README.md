# Coverwallet's Frontend Code Test.

### Before you start, some guidelines:

- UI: you’ll be able to use any UI framework that you like and fits our needs.

- If time permits, at least some testing is always encouraged! You are free to pick the testing technique that you think that might fit best for this.

- We don't have time limit set. Candidates are usually able to solve this in a couple of hours but we won't count the time spent. We understand that everyone has limited time and other responsibilities. If you need one week or more before you can find the time to dedicate to this it's also alright for us.

- If you have any question / consideration, feel free to reach me and we'll help.

### CryptoWallet

You’ve been assigned as main and sole developer of a new trading crypto-currency platform.

Because we love procedural and incremental processes you are going to build the first functionality: **Data Visualisation**.

Using the following open public API: [https://coinmarketcap.com/api/]() - You are going to generate a Single Page Application with a single route that will be used as dashboard.

This dashboard will display three main values:

**Bitcoin -> BTC - Ethereum -> ETH - Litecoin -> LTC**

Making usage of React and Redux, you’ll pull data in **real time** from that API and render it on the screen in three boxes.

| BTC: $-PRICE- | ETH: $ -PRICE- | LTC: $-PRICE- |

Once you have these values rendered in screen, we would like that they will be **refreshed each 30 seconds**, using the technique that you find more appropriate for it.

There is a caveat on this, we want to create the dashboard to spot pricing changes with a single glance. For that we’ll be using an industry standard, colouring.

Once the pricing has been displayed for the first time, we’ll handle this feature: the previous price will be compared with the new one and it will **change colour depending if that price has gone up or down**.

We think that feels appropriate to render the **first price in white**, having it change to red if the price goes down and green if the price goes up. As the **price might be the same it could then turn white** or stay white.

Good luck and happy coding!


# Running the project

## Using Docker

First time

* `docker-compose run --rm app bash` will open a session on the project container
* `npm install` (fron inside the container) will install the project dependencies

Start development environent

* `docker-compose up` will run the project in [http://localhost:3000]()

Run test suite

* `docker-compose run --rm app bash` will open a session on the project container
* `npm test` (from inside the container) will run the test suite

## Without Docker

Install dependencies

`npm install`

Start development environment [http://localhost:3000]()

`npm start`

Run test suite

`npm test`


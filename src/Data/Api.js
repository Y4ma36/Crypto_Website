//Coin Ranking API

const APIKEY = process.env.COIN_RANKING_API_KEY;

export async function fetchCoins() {
  try {
    const response = await fetch(`https://api.coinranking.com/v2/coins`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching coins:", error);
    return null;
  }
}

export async function fetchCoinsHistory(coinId) {
  try {
    const response = await fetch(
      `https://api.coinranking.com/v2/coin/${coinId}/history?timePeriod=7d`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching coin history:", error);
    return null;
  }
}

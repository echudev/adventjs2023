function organizeGifts(gifts) {
  let giftsArray = gifts.match(/[a-zA-Z]+|[0-9]+/g);
  let response = "";
  for (let i = 0; i < giftsArray.length; i += 2) {
    while (giftsArray[i] - 50 >= 0) {
      response = response.concat("[" + giftsArray[i + 1] + "]");
      giftsArray[i] = giftsArray[i] - 50;
    }
    while (giftsArray[i] - 10 >= 0) {
      response = response.concat("{" + giftsArray[i + 1] + "}");
      giftsArray[i] = giftsArray[i] - 10;
    }
    if (giftsArray[i] > 0) {
      response = response.concat(
        "(" + giftsArray[i + 1].repeat(giftsArray[i]) + ")"
      );
    }
  }
  return response;
}

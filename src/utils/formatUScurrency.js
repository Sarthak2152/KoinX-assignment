export const formatUSCurrency = function (amountStr) {
  try {
    const amount = parseFloat(amountStr);
    if (isNaN(amount)) {
      return 0;
    }
    const formattedAmount = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(amount);
    return formattedAmount;
  } catch (error) {
    return error.message;
  }
};
